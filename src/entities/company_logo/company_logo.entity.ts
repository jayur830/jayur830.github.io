import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CompanyLogo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  src: string;

  @Column({ default: '' })
  alt: string;

  @Column()
  width: number;

  @Column()
  height: number;
}
