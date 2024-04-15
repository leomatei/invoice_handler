import { IsString, IsBoolean, IsOptional } from 'class-validator';
export class UpdateInvoiceDto {
  @IsString()
  @IsOptional()
  readonly vendorName?: string;

  @IsString()
  @IsOptional()
  readonly amount?: string;

  @IsString()
  @IsOptional()
  readonly dueDate?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly userId?: string;

  @IsBoolean()
  @IsOptional()
  readonly paid?: boolean;
}
