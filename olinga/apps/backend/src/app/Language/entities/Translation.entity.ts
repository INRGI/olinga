import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('translations')
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  key: string;

  @Column({ type: 'json' })
  translations: Record<string, string>;
}
