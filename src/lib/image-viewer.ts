interface ViewerOptions {
  triggerSelector?: string;
  extraOpenerSelector?: string;
  onChange?: (trigger: HTMLElement) => void;
}

export function setupImageViewer(root: HTMLElement, { triggerSelector = '.image-link', extraOpenerSelector, onChange }: ViewerOptions = {}) {
  const dialog = root.querySelector<HTMLDialogElement>('dialog');
  const image = root.querySelector<HTMLImageElement>('[data-full-image]');
  const caption = root.querySelector<HTMLElement>('[data-caption]');
  if (!dialog || !image || !caption || typeof dialog.showModal !== 'function') return;
  root.dataset.initialized = 'true';
  const links = Array.from(root.querySelectorAll<HTMLElement>(triggerSelector));
  const counter = root.querySelector<HTMLElement>('[data-counter]');
  const stage = root.querySelector<HTMLElement>('.lightbox-stage');
  let currentIndex = 0;
  let requestId = 0;
  let activeAnimations: Animation[] = [];
  const clearTransition = () => {
    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations = [];
    stage?.querySelector('.lightbox-outgoing')?.remove();
  };
  const showPhoto = async (index: number, direction = 0) => {
    const request = ++requestId;
    currentIndex = (index + links.length) % links.length;
    const link = links[currentIndex];
    const animate = direction !== 0 && stage && dialog.open && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate) {
      const incoming = new window.Image();
      incoming.src = link.dataset.image ?? link.getAttribute('href') ?? '';
      await incoming.decode().catch(() => {});
      if (request !== requestId || !dialog.open) return;
    }
    const previousTransform = getComputedStyle(image).transform;
    clearTransition();
    let outgoing: HTMLDivElement | undefined;
    if (animate) {
      outgoing = document.createElement('div');
      outgoing.className = 'lightbox-outgoing';
      outgoing.setAttribute('aria-hidden', 'true');
      const previousImage = image.cloneNode(true) as HTMLImageElement;
      previousImage.removeAttribute('data-full-image');
      previousImage.alt = '';
      outgoing.append(previousImage);
      stage.append(outgoing);
    }
    image.src = link.dataset.image ?? link.getAttribute('href') ?? '';
    image.alt = link.dataset.alt ?? '';
    image.width = Number(link.dataset.width) || 600;
    image.height = Number(link.dataset.height) || 800;
    caption.textContent = link.dataset.title ?? '';
    onChange?.(link);
    if (counter) counter.textContent = `${currentIndex + 1} / ${links.length}`;
    if (animate && outgoing) {
      const distance = stage.clientWidth + 24;
      const options = { duration: 280, easing: 'cubic-bezier(.22, 1, .36, 1)' };
      const leaving = outgoing.animate([
        { transform: previousTransform === 'none' ? 'translateX(0)' : previousTransform },
        { transform: `translateX(${-direction * distance}px)` },
      ], options);
      const arriving = image.animate([
        { transform: `translateX(${direction * distance}px)` },
        { transform: 'translateX(0)' },
      ], options);
      activeAnimations = [leaving, arriving];
      const layer = outgoing;
      leaving.finished.then(() => layer.remove()).catch(() => {});
    }
    if (links.length > 1) {
      for (const offset of [-1, 1]) {
        const neighbour = links[(currentIndex + offset + links.length) % links.length];
        const preload = new window.Image();
        preload.src = neighbour.dataset.image ?? neighbour.getAttribute('href') ?? '';
      }
    }
  };
  links.forEach((link, index) => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      showPhoto(index);
      dialog.showModal();
    });
  });
  if (extraOpenerSelector) {
    root.querySelectorAll(extraOpenerSelector).forEach(opener => opener.addEventListener('click', () => {
      showPhoto(0);
      dialog.showModal();
    }));
  }
  root.querySelector('[data-previous]')?.addEventListener('click', () => showPhoto(currentIndex - 1, -1));
  root.querySelector('[data-next]')?.addEventListener('click', () => showPhoto(currentIndex + 1, 1));
  dialog.addEventListener('keydown', event => {
    if (!dialog.open || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    event.stopPropagation();
    showPhoto(currentIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  let swipeStart: { x: number; y: number; pointerId: number } | undefined;
  stage?.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    swipeStart = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    stage.setPointerCapture(event.pointerId);
  });
  stage?.addEventListener('pointerup', event => {
    if (!swipeStart || event.pointerId !== swipeStart.pointerId) return;
    const dx = event.clientX - swipeStart.x;
    const dy = event.clientY - swipeStart.y;
    swipeStart = undefined;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      const direction = dx < 0 ? 1 : -1;
      showPhoto(currentIndex + direction, direction);
    }
  });
  stage?.addEventListener('pointercancel', () => { swipeStart = undefined; });
  dialog.addEventListener('close', () => { swipeStart = undefined; requestId++; clearTransition(); });
  root.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }
  });
}
