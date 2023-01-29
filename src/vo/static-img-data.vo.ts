// import package modules
import { Field, Int, ObjectType } from '@nestjs/graphql';

// Import global modules

// Import local modules

@ObjectType()
export class StaticImgDataVO {
  @Field(() => String, {
    description: '이미지 src (url)',
  })
  src: string;

  @Field(() => String, {
    description: '이미지 alt',
  })
  alt: string;

  @Field(() => Int, {
    description: '이미지 width',
  })
  width: number;

  @Field(() => Int, {
    description: '이미지 height',
  })
  height: number;
}
