import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BOOKS_PATTERN } from '@app/contracts/books/books.pattern';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send(BOOKS_PATTERN.CREATE, createBookDto);
  }

  findAll() {
    return this.booksClient.send(BOOKS_PATTERN.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.booksClient.send(BOOKS_PATTERN.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send(BOOKS_PATTERN.UPDATE, {
      id,
      ...updateBookDto,
    });
  }

  remove(id: number) {
    return this.booksClient.send(BOOKS_PATTERN.REMOVE, id);
  }
}
