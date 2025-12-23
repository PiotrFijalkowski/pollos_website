import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get random posts for "See Also"
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id);
  const randomPosts = otherPosts
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return <BlogPostClient post={post} randomPosts={randomPosts} />;
}
