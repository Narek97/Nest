import { Module } from '@nestjs/common';
import OrmConfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { PetsModule } from './modules/pets/pest.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { MeetingModule } from './modules/meeting/meeting.module';
import { TaskModule } from './modules/tasks/task.module';
import { ContactInfoModule } from './modules/contactInfo/contactInfo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './modules/employee/employee.entity';
import { Meeting } from './modules/meeting/meeting.entity';
import { Task } from './modules/tasks/task.entity';
import { ContactInfo } from './modules/contactInfo/contactInfo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
    }),
    TypeOrmModule.forRoot({
      ...OrmConfig,
      autoLoadEntities: true,
    }),
    UsersModule,
    PetsModule,
    EmployeeModule,
    ContactInfoModule,
    MeetingModule,
    TaskModule,
    TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Task]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
