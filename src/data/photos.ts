import portrait from '../assets/photos/portrait.jpg';
import candid from '../assets/photos/candid.jpg';
import hills from '../assets/photos/cloudy-hills.jpg';
import blue from '../assets/photos/blue-light.jpg';
import backdrop from '../assets/photos/colourful-backdrop.jpg';
import waterside from '../assets/photos/waterside.jpg';
import mirror from '../assets/photos/mirror-selfie.jpg';
import hoodie from '../assets/photos/hoodie-story.jpg';
import upsideDown from '../assets/photos/upside-down.jpg';
import breakTime from '../assets/photos/taking-a-break.jpg';
import mountains from '../assets/photos/mountain-light.jpg';
import hillside from '../assets/photos/hillside-visit.jpg';
import studio from '../assets/photos/studio-portrait.jpg';
import outdoors from '../assets/photos/outdoors.jpg';
import evening from '../assets/photos/blue-evening.jpg';

const collection = {
  candid: { src: candid, title: 'Everyday', alt: 'Pawan smiling in a white T-shirt while leaning on a counter.' },
  hills: { src: hills, title: 'New friend', alt: 'Pawan offering food to a woolly white animal, with cloudy hills in the background.' },
  blue: { src: blue, title: 'In blue', alt: 'Pawan raising both hands in a room filled with blue projected light.' },
  backdrop: { src: backdrop, title: 'A little colour', alt: 'Pawan in a grey T-shirt in front of a light blue backdrop with colourful cartoon characters.' },
  waterside: { src: waterside, title: 'A quiet afternoon', alt: 'Pawan seated beside the water in sunglasses, with a green boat and trees behind him.' },
  portrait: { src: portrait, title: 'Hello again', alt: 'Pawan smiling in a grey T-shirt against a light blue background.' },
  mirror: { src: mirror, title: 'Mirror moment', alt: 'Pawan taking a mirror selfie in sunglasses, with an Agent090 text overlay.' },
  hoodie: { src: hoodie, title: 'Hood up', alt: 'A saved story screenshot of Pawan wearing a dark hoodie.' },
  breakTime: { src: breakTime, title: 'Taking a break', alt: 'Pawan resting his head on his folded arms at a counter, with another person smiling beside him.' },
  mountains: { src: mountains, title: 'Mountain light', alt: 'Pawan in sunglasses and a white T-shirt, with misty green mountains behind him.' },
  hillside: { src: hillside, title: 'Another new friend', alt: 'Pawan standing beside a goat in a garden with outdoor tables and green hills behind.' },
  outdoors: { src: outdoors, title: 'Out and about', alt: 'A close-up selfie of Pawan wearing a dark jacket under a covered outdoor walkway.' },
  upsideDown: { src: upsideDown, title: 'A different angle', alt: 'An upside-down close-up selfie of Pawan wearing a patterned T-shirt.' },
  evening: { src: evening, title: 'An evening in blue', alt: 'Pawan and another person smiling together at an event lit in blue.' },
  studio: { src: studio, title: 'A simple portrait', alt: 'A passport-style headshot of Pawan wearing a checked shirt against a white background.' },
};

export const photos = [
  collection.mirror, collection.candid,
  collection.backdrop,
  collection.hills, collection.hillside,
  collection.waterside, collection.mountains,
  collection.breakTime,
  collection.blue, collection.hoodie,
  collection.evening,
  collection.portrait, collection.outdoors,
  collection.upsideDown, collection.studio,
];

export const homePhotos = [collection.candid, collection.mirror, collection.hills];
