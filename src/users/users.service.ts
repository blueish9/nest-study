import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password:
        'f2de6c42177af8a7862eae4710516f5d51596d9809aa25b16ee3bf7ad659634d', // nest-study
    },
  ];

  async findOne(username: string) {
    return this.users.find((u) => u.username === username);
  }
}
