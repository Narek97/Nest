import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './contactInfo.entity';
import { Employee } from '../employee/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo, Employee])],
  providers: [],
  controllers: [],
})
export class ContactInfoModule {}
