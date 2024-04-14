import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UserService } from './users/user.service';
import { InvoicesController } from './invoices/invoices.controller';
import { InvoiceService } from './invoices/invoices.service';

@Module({
  imports: [],
  controllers: [UsersController, InvoicesController],
  providers: [UserService, InvoiceService],
})
export class AppModule {}
