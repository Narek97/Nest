import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    // const employee = new Employee();
    // employee.firstName = createEmployeeInput.firstName;
    // employee.lastname = createEmployeeInput.lastName;
    // employee.designation = createEmployeeInput.designation;
    // employee.city = createEmployeeInput.city;
    const employee = this.employeeRepo.create(createEmployeeInput);
    return this.employeeRepo.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
