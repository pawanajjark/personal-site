// Supplied editorial draft copy. Review before publishing changes.
import { env } from 'node:process';
const deploymentHost = env.VERCEL_ENV === 'production'
  ? env.VERCEL_PROJECT_PRODUCTION_URL
  : env.VERCEL_URL;

export const site = {
  name: 'Pawan',
  title: 'Pawan — Notes & writing',
  description: 'Notes on life, work, software, and things I’m learning.',
  intro: 'I build software and explore ideas with AI tools. This is where I write about my work, things I’m learning, and life along the way.',
  introMore: 'You’ll find longer articles, short notes, and occasionally a photo or video that explains something better than words.',
  url: env.SITE_URL || (deploymentHost ? `https://${deploymentHost}` : 'https://example.com'),
  isPreview: env.VERCEL_ENV === 'preview',
  language: 'en',
  // Set false once the sample posts have been replaced.
  showSamples: true,
  // Optional: { label: 'GitHub', href: 'https://github.com/your-name' }
  links: [] as { label: string; href: string }[],
};
