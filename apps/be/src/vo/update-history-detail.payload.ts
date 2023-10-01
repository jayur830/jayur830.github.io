import { Field, ObjectType } from '@nestjs/graphql';
import { Dayjs } from 'dayjs';

import { TechLogo } from '@/enum/logo.enum';
import { MonthScalar } from '@/scalars/date/month.scalar';

@ObjectType()
export class UpdateHistoryDetailPayload {
  @Field({ description: '경력 ID' })
  historyDetailId: string;

  @Field({ nullable: true, description: '팀 또는 소속 서비스 이름 (없을 경우 null)' })
  group?: string | null;

  @Field({ description: '프로젝트 이름' })
  name: string;

  @Field(() => MonthScalar, { description: '프로젝트 시작월' })
  startDate: Dayjs;

  @Field(() => MonthScalar, { nullable: true, description: '프로젝트 종료월 (진행중일 경우 null)' })
  endDate?: Dayjs | null;

  @Field(() => [TechLogo], { description: '프로젝트에 쓰인 기술 태그 목록' })
  techList: TechLogo[];

  @Field({ description: '프로젝트 설명 (성과/결과)' })
  description: string;
}
