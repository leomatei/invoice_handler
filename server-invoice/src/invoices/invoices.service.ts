import { PrismaClient, Invoice } from '@prisma/client';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

export class InvoiceService {
  constructor(private readonly prisma: PrismaClient) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<any> {
    return this.prisma.invoice.create({ data: createInvoiceDto });
  }

  async getInvoices(): Promise<Invoice[]> {
    console.log(this.prisma);
    return this.prisma.invoice.findMany();
  }

  async getInvoiceById(id: string): Promise<any> {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  async updateInvoice(
    id: string,
    updateUserDto: UpdateInvoiceDto,
  ): Promise<Invoice> {
    return this.prisma.invoice.update({ where: { id }, data: updateUserDto });
  }

  async deleteInvoice(id: string): Promise<Invoice> {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
