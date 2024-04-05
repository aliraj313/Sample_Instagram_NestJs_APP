import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Expose()
  content: string;
}

export class UpdatePostDto extends CreatePostDto {}
