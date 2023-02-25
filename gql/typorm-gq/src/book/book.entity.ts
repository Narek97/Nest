import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../common/anstract.entity';

@Entity({ name: 'book' })
export class Book extends AbstractEntity {
  @Column()
  title: string;

  @Column()
  price: number;
}
