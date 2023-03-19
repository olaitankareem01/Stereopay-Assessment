import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Column()
  @IsIn(['audio', 'image'])
  @IsNotEmpty()
  type: string;

  @Column()
  @IsIn(['Active', 'Inactive'])
  @IsNotEmpty()
  status: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'datetime' })
  updatedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  deletedAt?: Date;
}