'use client';

import { useMemo, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { NotionPage } from '@/lib/notion';

import BlogPostCard from './BlogPostCard';

export interface BlogContentProps {
  categoriesWithPosts: {
    category: NotionPage;
    posts: NotionPage[];
  }[];
}

export default function BlogContent({ categoriesWithPosts }: BlogContentProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categoriesWithPosts[0]?.category.id || '');

  // 선택된 카테고리의 게시물 찾기
  const posts = useMemo(() => {
    const selectedCategoryData = categoriesWithPosts.find(({ category }) => category.id === selectedCategoryId);
    return selectedCategoryData?.posts || [];
  }, [categoriesWithPosts, selectedCategoryId]);

  return (
    <>
      {/* 카테고리 선택 */}
      <div className="mb-8">
        <Select onValueChange={setSelectedCategoryId} value={selectedCategoryId}>
          <SelectTrigger className="cursor-pointer px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categoriesWithPosts.map(({ category }) => (
                <SelectItem key={category.id} value={category.id}>{category.title}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
