import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Pet } from '../pets/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Pet])],
  providers: [],
  controllers: [],
})
export class UsersModule {}
