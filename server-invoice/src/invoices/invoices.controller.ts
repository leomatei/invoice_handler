import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto): Promise<string> {
    return this.invoiceService.createInvoice(createInvoiceDto); // Call the service method
  }

  @Get()
  async getInvoices() {
    return this.invoiceService.getInvoices();
  }

  @Get('total')
  async getTotal() {
    console.log('here');
    return await this.invoiceService.getUnpaidInvoicesWithTotalAmount();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.invoiceService.getInvoiceById(id);
  }

  @Patch(':id')
  async updateInvoice(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    return this.invoiceService.updateInvoice(id, updateInvoiceDto);
  }

  @Delete(':id')
  async deleteInvoice(@Param('id') id: string) {
    return this.invoiceService.deleteInvoice(id);
  }
}
