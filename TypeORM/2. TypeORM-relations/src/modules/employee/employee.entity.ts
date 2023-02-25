import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ContactInfo } from '../contactInfo/contactInfo.entity';
import { Task } from '../tasks/task.entity';
import { Meeting } from '../meeting/meeting.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity()
export class Employee extends AbstractEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  managerId: number;

  ///////////////////////////////////////////////////////////

  @JoinColumn({ name: 'managerId' })
  @ManyToOne(() => Employee, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  employees: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];

  @JoinTable()
  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  meetings: Meeting[];
}
