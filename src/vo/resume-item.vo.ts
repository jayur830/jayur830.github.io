import { Field, ObjectType } from '@nestjs/graphql';

import { CareerVO } from './career.vo';
import { StaticImgDataVO } from './static-img-data.vo';

@ObjectType()
export class ResumeItemVO {
  @Field(() => String, {
    description: '회사 이름',
  })
  companyName: string;

  @Field(() => StaticImgDataVO, {
    nullable: true,
    description: '회사 로고',
  })
  logo?: StaticImgDataVO;

  @Field(() => String, {
    description: '입사일',
  })
  startDate: string;

  @Field(() => String, {
    nullable: true,
    description: '퇴사일',
  })
  endDate?: string;

  @Field(() => String, {
    nullable: true,
    description: '회사 홈페이지 주소',
  })
  website?: string;

  @Field(() => String, {
    nullable: true,
    description: '회사에 대한 간단한 설명',
  })
  description?: string;

  @Field(() => [CareerVO], {
    description: '회사 경력',
  })
  careers: CareerVO[];
}
