import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ResumeHistory } from '../resume_history/resume_history.entity';

@Entity()
export class ResumeHistoryDetail {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  group: string | null;

  @Column()
  name: string;

  @Column({ name: 'start_date' })
  startDate: string;

  @Column({ name: 'end_date', nullable: true })
  endDate?: string;

  @Column({ name: 'tech_list' })
  techList: string;

  @Column({ default: '' })
  description: string;

  @ManyToOne(() => ResumeHistory, (history) => history.careers)
  @JoinColumn({ name: 'history_id' })
  history: ResumeHistory;
}
