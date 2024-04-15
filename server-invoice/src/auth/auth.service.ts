import { PrismaClient, User } from '@prisma/client';

export class AuthService {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userContext } = user;
      return userContext;
    }
    return null;
  }
  async login(email: string, password: string): Promise<User | null> {
    const user = await this.validateUser(email, password);

    if (user) {
      return user;
    }
    return null;
  }
}
