import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  findPosts() {
    return this.prisma.post.findMany();
  }

  removePost(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }

  updatePost(id: number, data: UpdatePostDto) {
    return this.prisma.post.update({ where: { id }, data });
  }

  findPostDetail(id: number) {
    return this.prisma.post.findUniqueOrThrow({ where: { id } });
  }

  createPost(data: CreatePostDto) {
    return this.prisma.post.create({ data });
  }
}
