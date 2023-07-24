import { Field, ObjectType } from '@nestjs/graphql';

import { Career } from './career.vo';
import { ImageMetadata } from './image-metadata.vo';

@ObjectType()
export class Company {
  @Field({ description: '회사 ID' })
  companyId: string;

  @Field({ description: '회사 이름' })
  companyName: string;

  @Field({ nullable: true, description: '회사 로고' })
  logo: ImageMetadata | null;

  @Field({ description: '입사일' })
  startDate: string;

  @Field({ nullable: true, description: '퇴사일' })
  endDate: string | null;

  @Field({ nullable: true, description: '회사 홈페이지 주소' })
  website: string | null;

  @Field({ nullable: true, description: '회사에 대한 간단한 설명' })
  description: string | null;

  @Field(() => [Career], { description: '회사 경력' })
  careers: Career[];
}
