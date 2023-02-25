import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity()
export class ContactInfo extends AbstractEntity {
  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column()
  employeeId: number;

  @JoinColumn()
  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  employee: Employee;
}
