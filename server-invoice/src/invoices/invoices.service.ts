import { PrismaClient, Invoice } from '@prisma/client';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

export class InvoiceService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<any> {
    return this.prisma.invoice.create({ data: createInvoiceDto });
  }

  async getInvoices(): Promise<Invoice[]> {
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

  async getUnpaidInvoicesWithTotalAmount(): Promise<{
    totalAmount: number;
  }> {
    const unpaidInvoices = await this.prisma.invoice.findMany({
      where: { paid: false },
    });

    console.log(unpaidInvoices);

    const totalAmount = unpaidInvoices.reduce(
      (acc, curr) => acc + parseFloat(curr.amount),
      0,
    );

    return { totalAmount };
  }
}
