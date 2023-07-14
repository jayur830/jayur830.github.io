import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
