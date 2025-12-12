
import { getChildPages } from '@/lib/notion';

export async function generateStaticParams() {
  const categories = await getChildPages('2aaa7273cb3b4df88017cd5ebbde1115');
  const categoriesWithPosts = await Promise.all(
    categories.flatMap(async (category) => {
      const posts = await getChildPages(category.id);
      return posts.map(({ id }) => ({ id }));
    }),
  );
  return categoriesWithPosts.flat();
}

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  //   console.log('Params:', { id });
  return <div className="max-w-4xl mx-auto px-6 py-12">Blog Post: {id}</div>;
}
