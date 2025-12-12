import type { BlockObjectResponse, PageObjectResponse } from '@notionhq/client';
import { Client } from '@notionhq/client';

// Notion 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface NotionPage {
  id: string;
  title: string;
  url: string;
  createdTime: string;
  lastEditedTime: string;
  cover?: string; // 커버 이미지 URL
  excerpt?: string; // 페이지 내용 미리보기 (첫 몇 줄)
}

/**
 * 커버 이미지 URL 추출
 */
function getCoverImageUrl(cover: PageObjectResponse['cover']) {
  if (!cover) {
    return undefined;
  }
  if (cover.type === 'external') {
    return cover.external.url;
  }
  if (cover.type === 'file') {
    return cover.file.url;
  }
  return undefined;
}

/**
 * 페이지의 텍스트 내용 일부를 추출 (첫 300자)
 */
async function getPageExcerpt(pageId: string) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 5, // 처음 5개 블록만 가져오기
    });

    let excerpt = '';

    for (const block of blocks.results) {
      if (excerpt.length >= 300) break;

      const blockData = block as BlockObjectResponse;

      // paragraph, heading, bulleted_list_item 등에서 텍스트 추출
      if (blockData.type === 'paragraph' && blockData.paragraph.rich_text.length > 0) {
        const text = blockData.paragraph.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      } else if (blockData.type === 'heading_1' && blockData.heading_1.rich_text.length > 0) {
        const text = blockData.heading_1.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      } else if (blockData.type === 'heading_2' && blockData.heading_2.rich_text.length > 0) {
        const text = blockData.heading_2.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      } else if (blockData.type === 'heading_3' && blockData.heading_3.rich_text.length > 0) {
        const text = blockData.heading_3.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      } else if (blockData.type === 'bulleted_list_item' && blockData.bulleted_list_item.rich_text.length > 0) {
        const text = blockData.bulleted_list_item.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      } else if (blockData.type === 'numbered_list_item' && blockData.numbered_list_item.rich_text.length > 0) {
        const text = blockData.numbered_list_item.rich_text
          .map(({ plain_text }) => plain_text)
          .join('');
        excerpt += text + ' ';
      }
    }

    // 300자로 제한하고 말줄임표 추가
    return excerpt.trim().slice(0, 300) + (excerpt.length > 300 ? '...' : '');
  } catch (error) {
    console.error('Error fetching page excerpt:', error);
    return '';
  }
}

/**
 * 특정 페이지의 하위 페이지 리스트를 조회합니다.
 * @param parentPageId 상위 페이지 ID
 * @returns 하위 페이지 리스트
 */
export async function getChildPages(parentPageId: string): Promise<NotionPage[]> {
  try {
    // blocks.children.list API를 사용하여 하위 블록 조회
    const response = await notion.blocks.children.list({
      block_id: parentPageId,
      page_size: 100,
    });

    // child_page 타입의 블록만 필터링
    const childPages = response.results.filter((block) => 'type' in block && block.type === 'child_page');

    // 각 페이지의 상세 정보 조회
    const pagesWithDetails = await Promise.all(
      childPages.map(async (block) => {
        const page = await notion.pages.retrieve({ page_id: block.id });

        // PageObjectResponse인지 확인
        if (!('url' in page)) {
          throw new Error('Invalid page response');
        }

        // 페이지 제목 추출
        let title = 'Untitled';
        if ('properties' in page && page.properties.title) {
          const titleProperty = page.properties.title;
          if (titleProperty.type === 'title' && titleProperty.title.length > 0) {
            title = titleProperty.title[0].plain_text;
          }
        } else if ('child_page' in block) {
          title = block.child_page.title;
        }

        // 커버 이미지 추출
        const cover = getCoverImageUrl(page.cover);

        // 페이지 내용 일부 추출
        const excerpt = await getPageExcerpt(page.id);

        return {
          id: page.id,
          title,
          url: page.url,
          createdTime: page.created_time,
          lastEditedTime: page.last_edited_time,
          cover,
          excerpt,
        };
      }),
    );

    return pagesWithDetails;
  } catch (error) {
    console.error('Error fetching child pages:', error);
    throw error;
  }
}

/**
 * 페이지 정보를 조회합니다.
 * @param pageId 페이지 ID
 * @returns 페이지 정보
 */
export async function getPage(pageId: string): Promise<NotionPage> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });

    // PageObjectResponse인지 확인
    if (!('url' in page)) {
      throw new Error('Invalid page response');
    }

    // 페이지 제목 추출
    let title = 'Untitled';
    if ('properties' in page && page.properties.title) {
      const titleProperty = page.properties.title;
      if (titleProperty.type === 'title' && titleProperty.title.length > 0) {
        title = titleProperty.title[0].plain_text;
      }
    }

    // 커버 이미지 추출
    const cover = getCoverImageUrl(page.cover);

    // 페이지 내용 일부 추출
    const excerpt = await getPageExcerpt(page.id);

    return {
      id: page.id,
      title,
      url: page.url,
      createdTime: page.created_time,
      lastEditedTime: page.last_edited_time,
      cover,
      excerpt,
    };
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}
