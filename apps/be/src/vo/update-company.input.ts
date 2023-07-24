import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyInput {
  @Field({ description: '회사 ID' })
  companyId: string;

  @Field({ nullable: true, description: '회사 이름' })
  companyName?: string | null;

  @Field({ nullable: true, description: '입사일' })
  startDate?: string | null;

  @Field({ nullable: true, description: '퇴사일' })
  endDate?: string | null;

  @Field({ nullable: true, description: '회사 홈페이지 주소' })
  website?: string | null;

  @Field({ nullable: true, description: '회사에 대한 간단한 설명' })
  description?: string | null;
}
