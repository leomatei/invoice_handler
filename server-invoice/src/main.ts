import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma = new PrismaClient();
  app.use((req, res, next) => {
    req['prisma'] = prisma;
    next();
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
