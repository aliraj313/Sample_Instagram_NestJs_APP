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
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() data: CreatePostDto) {
    return this.postService.createPost(data);
  }

  @Get()
  findPosts() {
    return this.postService.findPosts();
  }

  @Get(':id')
  findPostDetail(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findPostDetail(+id);
  }

  @Put(':id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePost(+id, updatePostDto);
  }

  @Delete(':id')
  removePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.removePost(+id);
  }
}
