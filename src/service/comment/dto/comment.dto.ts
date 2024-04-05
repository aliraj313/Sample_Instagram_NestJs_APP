import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @Expose()
  content: string;
}

export class UpdateCommentDto extends CreateCommentDto {}
