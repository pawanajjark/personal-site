import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'posts'>;
export async function publishedPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft && data.date <= new Date())).sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}
export const postUrl = (post: Post) => `/${post.data.kind === 'note' ? 'notes' : 'writing'}/${post.id}/`;
export const formatDate = (date: Date) => new Intl.DateTimeFormat('en', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
}).format(date);
export const shortDate = (date: Date) => new Intl.DateTimeFormat('en', {
  day: 'numeric', month: 'short', timeZone: 'UTC',
}).format(date);
export const readingTime = (body = '') => Math.max(1, Math.ceil(body.split(/\s+/).length / 220));
