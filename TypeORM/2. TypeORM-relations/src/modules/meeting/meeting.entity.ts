import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity()
export class Meeting extends AbstractEntity {
  @Column()
  zoomUrl: string;

  @JoinTable()
  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}
