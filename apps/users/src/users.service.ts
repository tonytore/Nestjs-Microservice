import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  books: UserDto[] = [
    {
      id: 1,
      username: 'temet',
      password: 'zion',
    },
    {
      id: 2,
      username: 'temet',
      password: 'zion',
    },
  ];
  findAll(): UserDto[] {
    return this.books;
  }

  findByUserName(username: string): UserDto {
    const user = this.books.find((user) => user.username === username);
    if (user) {
      return user;
    }
    throw new NotFoundException('User not found');
  }
}
