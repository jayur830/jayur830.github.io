import { Field, InputType } from '@nestjs/graphql';

import { MonthScalar } from '@/scalars/date/month.scalar';

@InputType()
export class UpdateCompanyInput {
  @Field({ description: '회사 ID' })
  companyId: string;

  @Field({ description: '회사 이름' })
  companyName: string;

  @Field(() => MonthScalar, { nullable: true, description: '입사일' })
  startDate?: string | null;

  @Field(() => MonthScalar, { nullable: true, description: '퇴사일' })
  endDate?: string | null;

  @Field({ nullable: true, description: '회사 홈페이지 주소' })
  website?: string | null;

  @Field({ nullable: true, description: '회사에 대한 간단한 설명' })
  description?: string | null;
}
