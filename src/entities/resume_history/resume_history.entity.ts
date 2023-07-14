import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CompanyLogo } from '../company_logo/company_logo.entity';
import { ResumeHistoryDetail } from '../resume_history_detail/resume_history_detail.entity';
import { ResumeInfo } from '../resume_info/resume_info.entity';

@Entity()
@ObjectType()
export class ResumeHistory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column({ name: 'start_date' })
  startDate: string;

  @Column({ name: 'end_date', nullable: true })
  endDate?: string;

  @Column({ nullable: true })
  website: string | null;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => ResumeInfo, (info) => info.history)
  @JoinColumn({ name: 'resume_info_id' })
  resumeInfo: ResumeInfo;

  @OneToMany(() => ResumeHistoryDetail, (carriers) => carriers.history, { eager: true })
  @JoinColumn()
  carriers: ResumeHistoryDetail[];

  @OneToOne(() => CompanyLogo, (logo) => logo.id, { eager: true })
  @JoinColumn({ name: 'logo_id' })
  logo: CompanyLogo;
}
