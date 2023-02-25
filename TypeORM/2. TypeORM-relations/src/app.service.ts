import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './modules/employee/employee.entity';
import { ContactInfo } from './modules/contactInfo/contactInfo.entity';
import { Meeting } from './modules/meeting/meeting.entity';
import { Task } from './modules/tasks/task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  async seed() {
    // employee 1 CEO
    const ceo = this.employeeRepo.create({ name: 'Mr. CEO' });
    await this.employeeRepo.save(ceo);

    // const ceoContactInfo = this.contactInfoRepo.create({
    //   email: 'email@email.com',
    //   // employeeId: ceo.id,
    // });
    //
    // ceoContactInfo.employee = ceo;
    // await this.contactInfoRepo.save(ceoContactInfo);

    // employee 2 Manager
    // const manager = this.employeeRepo.create({ name: 'Marius', manager: ceo });
    //
    // const task1 = this.taskRepo.create({ name: 'Hire people' });
    // await this.taskRepo.save(task1);
    //
    // const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    // await this.taskRepo.save(task2);
    //
    // manager.tasks = [task1, task2];
    //
    // const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    // meeting1.attendees = [ceo];
    // await this.meetingRepo.save(meeting1);
    //
    // await this.employeeRepo.save(manager);
  }

  getEmployeeById(id: number) {
    return this.employeeRepo.findOne(id, {
      relations: [
        'manager',
        'directReports',
        'tasks',
        'contactInfo',
        'meetings',
      ],
    });
  }
}
