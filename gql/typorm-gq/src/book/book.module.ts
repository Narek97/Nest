import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookResolver } from './book.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [],
  providers: [BookService, BookResolver],
})
export class BookModule {}
