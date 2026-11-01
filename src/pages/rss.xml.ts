import rss from '@astrojs/rss';
import { site } from '../site.config';
import { publishedPosts, postUrl } from '../lib/posts';
export async function GET() {
  const posts = await publishedPosts();
  return rss({ title: site.title, description: site.description, site: site.url,
    items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: postUrl(post) })),
    customData: '<language>en</language>',
  });
}
