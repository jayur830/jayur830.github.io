import { Field, ObjectType } from '@nestjs/graphql';

import { CareerItemVO } from './career-item.vo';

@ObjectType()
export class CareerVO {
  @Field(() => String, {
    nullable: true,
    description: '팀 또는 소속 서비스 이름 (없을 경우 null)',
  })
  groupName: string | null;

  @Field(() => [CareerItemVO], {
    description: '수행한 프로젝트 경력',
  })
  list: CareerItemVO[];
}
