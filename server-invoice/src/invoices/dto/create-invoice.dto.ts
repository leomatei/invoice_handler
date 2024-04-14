export class CreateInvoiceDto {
  readonly id: string;
  readonly vendorName: string;
  readonly amount: string;
  readonly dueDate: string;
  readonly description: string;
  readonly userId: string;
  readonly paid: boolean;
}
