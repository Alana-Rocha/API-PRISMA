import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Post title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Post content' })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({ description: 'Post author email' })
  @IsEmail()
  @IsNotEmpty()
  authorEmail: string;
}
