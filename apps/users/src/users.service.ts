import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  books: UserDto[] = [
    {
      id: 1,
      firstname: 'Tonytor',
      lastname: 'Zion',
      age: 33,
    },
    {
      id: 2,
      firstname: 'Temet',
      lastname: 'Zion',
      age: 33,
    },
  ];
  findAll(): UserDto[] {
    return this.books;
  }
}
