import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ResumeHistory } from '../resume_history/resume_history.entity';

@Entity()
@ObjectType()
export class ResumeInfo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  github: string | null;

  @OneToMany(() => ResumeHistory, (history) => history.resumeInfo, { eager: true })
  history: ResumeHistory[];
}
