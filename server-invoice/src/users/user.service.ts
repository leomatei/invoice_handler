import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return this.prisma.user.create({ data: createUserDto });
  }

  async getUsers(): Promise<User[]> {
    console.log(this.prisma);
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<any> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
