import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ResumeVO } from '@/vo/resume.vo';
import { ResumeItemVO } from '@/vo/resume-item.vo';

@Schema({ collection: 'resume' })
@ObjectType()
export class Resume extends ResumeVO {
  @Prop()
  @Field(() => String, {
    description: '이력서 제목',
  })
  title: string;

  @Prop({ required: false })
  @Field(() => String, {
    nullable: true,
    description: 'Github 주소',
  })
  github?: string;

  @Prop()
  @Field(() => [ResumeItemVO], {
    nullable: true,
    description: '총 경력 리스트',
  })
  history: ResumeItemVO[];
}

export type ResumeDocument = Resume & Document;
export const ResumeSchema = SchemaFactory.createForClass(Resume);
