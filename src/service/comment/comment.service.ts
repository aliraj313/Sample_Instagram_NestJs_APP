import { Injectable } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  findComments(postId: number) {
    return this.prisma.comment.findMany({ where: { postId } });
  }

  removeComment(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }

  updateComment(id: number, data: UpdateCommentDto) {
    return this.prisma.comment.update({ where: { id }, data });
  }

  findCommentDetail(id: number) {
    return this.prisma.comment.findUniqueOrThrow({ where: { id } });
  }

  createComment(postId: number, data: CreateCommentDto) {
    return this.prisma.comment.create({ data: { ...data, postId } });
  }
}
