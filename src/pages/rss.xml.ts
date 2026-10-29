import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';

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
      link: `/blog/${post.id}/`,
    })),
  });
}
