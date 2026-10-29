import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';
import { withBase } from '../utils/url';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'lavishgent',
    description: 'Engineering notes on shipping quality code fast.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: withBase(`/blog/${post.id}/`),
    })),
  });
}
