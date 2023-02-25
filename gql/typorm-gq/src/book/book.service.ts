import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { AddBookArgs } from './args/addBook.args';
import { UpdateBookArgs } from './args/updateBook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) public readonly bookRepo: Repository<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.bookRepo.find();
  }

  async findBookById(id: number): Promise<Book> {
    return await this.bookRepo.findOne({ where: { id } });
  }

  async deleteBook(id: number): Promise<string | number> {
    await this.bookRepo.delete(id);
    return id;
  }

  async addBook(addBookArgs: AddBookArgs): Promise<string> {
    let book: Book = new Book();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has ben added';
  }

  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    let book: Book = await this.bookRepo.findOne({
      where: {
        id: updateBookArgs.id,
      },
    });
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has ben updated';
  }
}
