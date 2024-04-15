import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UserService } from './users/user.service';
import { InvoicesController } from './invoices/invoices.controller';
import { InvoiceService } from './invoices/invoices.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [UsersController, InvoicesController, AuthController],
  providers: [UserService, InvoiceService, AuthService],
})
export class AppModule {}
