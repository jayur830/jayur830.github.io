import { Field, ObjectType } from '@nestjs/graphql';

import { ResumeItemVO } from './resume-item.vo';

@ObjectType()
export class ResumeVO {
  @Field(() => String, {
    description: '이력서 제목',
  })
  title: string;

  @Field(() => String, {
    nullable: true,
    description: 'Github 주소',
  })
  github?: string;

  @Field(() => [ResumeItemVO], {
    nullable: true,
    description: '총 경력 리스트',
  })
  history: ResumeItemVO[];
}
