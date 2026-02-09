import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'apps/users/src/users.service';

export type AuthInput = {
  username: string;
  password: string;
};
type SignInData = {
  userId: number;
  username: string;
};
type AuthResult = {
  token: string;
  userId: number;
  username: string;
};
@Injectable()
export class AuthService {
  constructor(public usersService: UsersService) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      token: 'token',
      userId: user.userId,
      username: user.username,
    };
  }
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = this.usersService.findByUserName(input.username);
    if (user && user.password === input.password) {
      return {
        userId: user.id,
        username: user.username,
      };
    }
    return Promise.resolve(null);
  }
}
