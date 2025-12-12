import BlogContent from '@/components/BlogContent';
import { getChildPages } from '@/lib/notion';

export default async function Page() {
  // 빌드 타임에 카테고리 목록 조회
  const categories = await getChildPages('2aaa7273cb3b4df88017cd5ebbde1115');

  // 빌드 타임에 모든 카테고리의 게시물 조회
  const categoriesWithPosts = await Promise.all(
    categories.map(async (category) => {
      const posts = await getChildPages(category.id);
      return {
        category,
        posts,
      };
    }),
  );

  return (
    <div className="max-w-[1440px] w-full mx-auto px-6 py-12">
      <BlogContent categoriesWithPosts={categoriesWithPosts} />
    </div>
  );
}
