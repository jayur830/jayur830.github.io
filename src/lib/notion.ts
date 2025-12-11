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
    const childPages = response.results.filter(
      (block: any) => block.type === 'child_page',
    );

    // 각 페이지의 상세 정보 조회
    const pagesWithDetails = await Promise.all(
      childPages.map(async (block: any) => {
        const page = await notion.pages.retrieve({ page_id: block.id });

        // PageObjectResponse인지 확인
        if (!('url' in page)) {
          throw new Error('Invalid page response');
        }

        // 페이지 제목 추출
        let title = 'Untitled';
        if ('properties' in page && page.properties.title) {
          const titleProperty: any = page.properties.title;
          if (titleProperty.type === 'title' && titleProperty.title.length > 0) {
            title = titleProperty.title[0].plain_text;
          }
        } else if ('child_page' in block) {
          title = block.child_page.title;
        }

        return {
          id: page.id,
          title,
          url: page.url,
          createdTime: page.created_time,
          lastEditedTime: page.last_edited_time,
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
      const titleProperty: any = page.properties.title;
      if (titleProperty.type === 'title' && titleProperty.title.length > 0) {
        title = titleProperty.title[0].plain_text;
      }
    }

    return {
      id: page.id,
      title,
      url: page.url,
      createdTime: page.created_time,
      lastEditedTime: page.last_edited_time,
    };
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}
