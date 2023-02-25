import { Column, Entity, ManyToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity()
export class Task extends AbstractEntity {
  @Column({ length: 36 })
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  employee: Employee;
}
