import 'highlight.js/styles/github-dark.css';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { getChildPages, getNotionPageAsMarkdown, getPage } from '@/lib/notion';
import dayjs from 'dayjs';

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

  const [page, markdown] = await Promise.all([
    // 페이지 정보 가져오기
    getPage(id),
    // Notion 페이지를 마크다운으로 변환
    getNotionPageAsMarkdown(id),
  ]);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-12">
      {/* 페이지 타이틀 */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{page.title}</h1>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {dayjs(page.createdTime).format('YYYY-MM-DD')}
        </div>
      </header>

      {/* 마크다운 콘텐츠 */}
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
