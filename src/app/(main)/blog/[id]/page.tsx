import 'highlight.js/styles/github-dark.css';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { getChildPages, getNotionPageAsMarkdown } from '@/lib/notion';

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

  // Notion 페이지를 마크다운으로 변환
  const markdown = await getNotionPageAsMarkdown(id);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-12">
      <article className="prose">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
