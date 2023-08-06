import { Field, ObjectType } from '@nestjs/graphql';

import { TechLogo } from '@/enum/logo.enum';

@ObjectType()
export class CareerItem {
  @Field({ description: '경력 ID' })
  careerId: string;

  @Field({ description: '프로젝트 이름' })
  name: string;

  @Field({ description: '프로젝트 진행 중 여부' })
  completed: boolean;

  @Field({ description: '프로젝트 시작월' })
  startDate: string;

  @Field({ nullable: true, description: '프로젝트 종료월 (진행중일 경우 null)' })
  endDate: string | null;

  @Field(() => [TechLogo], { description: '프로젝트에 쓰인 기술 태그 목록' })
  techList: TechLogo[];

  @Field({ description: '프로젝트 설명 (성과/결과)' })
  description: string;
}
