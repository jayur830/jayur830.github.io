'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import type { NotionPage } from '@/lib/notion';

interface BlogPostCardProps {
  post: NotionPage;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link
      className="group flex gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
      href={post.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* 썸네일 이미지 */}
      <div className="flex-shrink-0 w-32 h-32 bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden relative">
        {post.cover ? (
          <Image
            alt={post.title}
            className="object-cover"
            fill
            src={post.cover}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-2">
            {post.excerpt}
          </p>
        )}
        <div className="text-xs text-zinc-500">
          {dayjs(post.createdTime).format('YYYY-MM-DD')}
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogPostCard, (prev, next) => prev.post.id === next.post.id);
