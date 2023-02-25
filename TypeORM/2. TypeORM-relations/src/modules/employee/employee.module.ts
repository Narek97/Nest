import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Task } from '../tasks/task.entity';
import { Meeting } from '../meeting/meeting.entity';
import { ContactInfo } from '../contactInfo/contactInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Task])],
  providers: [],
  controllers: [],
})
export class EmployeeModule {}
