import { IsString, IsBoolean } from 'class-validator';
export class CreateInvoiceDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly vendorName: string;

  @IsString()
  readonly amount: string;

  @IsString()
  readonly dueDate: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly userId: string;

  @IsBoolean()
  readonly paid: boolean;
}
