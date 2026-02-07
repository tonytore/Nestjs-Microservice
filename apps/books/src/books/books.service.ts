import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  books: BookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      rating: 4.8,
    },
  ];
  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const books = this.findOne(id);
    if (books) {
      Object.assign(books, updateBookDto);
      return books;
    }
    return null;
  }

  remove(id: number) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1);
      return removedBook[0];
    }
    return null;
  }
}
