import { site } from '../site.config';
export function GET() {
  const configured = new URL(site.url).hostname !== 'example.com';
  return new Response(configured ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
}
