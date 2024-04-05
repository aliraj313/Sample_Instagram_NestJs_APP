import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':postId')
  createComment(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() data: CreateCommentDto,
  ) {
    return this.commentService.createComment(postId, data);
  }

  @Get(':postId')
  findComments(@Param('postId', ParseIntPipe) postId: number) {
    return this.commentService.findComments(postId);
  }

  @Get(':id')
  findCommentDetail(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.findCommentDetail(+id);
  }

  @Put(':id')
  updateComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment( id, updatePostDto);
  }
  

  @Delete(':id')
  removeComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.removeComment(+id);
  }
}
