// import package modules
import { Field, ObjectType } from '@nestjs/graphql';

// Import global modules
// Import local modules
import { CarrierItemVO } from './carrier-item.vo';

@ObjectType()
export class CarrierVO {
  @Field(() => String, {
    nullable: true,
    description: '팀 또는 소속 서비스 이름 (없을 경우 null)',
  })
  groupName?: string;

  @Field(() => [CarrierItemVO], {
    description: '수행한 프로젝트 경력',
  })
  list: CarrierItemVO[];
}
