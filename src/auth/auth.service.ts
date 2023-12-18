import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: _, ...result } = user;
    return result;
  }
}
