import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ResumeHistory } from './resume_history.entity';

@Entity()
export class CompanyLogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column({ default: '' })
  alt: string;

  @Column()
  width: number;

  @Column()
  height: number;
}
