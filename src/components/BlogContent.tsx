'use client';

import { useState } from 'react';

import type { NotionPage } from '@/lib/notion';

import BlogPostCard from './BlogPostCard';

interface CategoryWithPosts {
  category: NotionPage;
  posts: NotionPage[];
}

interface BlogContentProps {
  categoriesWithPosts: CategoryWithPosts[];
}

export default function BlogContent({ categoriesWithPosts }: BlogContentProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categoriesWithPosts[0]?.category.id || '',
  );

  // 선택된 카테고리의 게시물 찾기
  const selectedCategoryData = categoriesWithPosts.find(
    (item) => item.category.id === selectedCategoryId,
  );
  const posts = selectedCategoryData?.posts || [];

  return (
    <>
      {/* 카테고리 선택 */}
      <div className="mb-8">
        <select
          className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="category"
          onChange={(e) => setSelectedCategoryId(e.target.value)}
          value={selectedCategoryId}
        >
          {categoriesWithPosts.map(({ category }) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* 게시물 목록 */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            게시물이 없습니다.
          </div>
        ) : (
          posts.map((post) => <BlogPostCard key={post.id} post={post} />)
        )}
      </div>
    </>
  );
}
