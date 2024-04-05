import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 import { PrismaModule } from './service/prisma/prisma.module';
import { PostModule } from './service/post/post.module';
import { CommentModule } from './service/comment/comment.module';

@Module({
  imports: [PostModule, CommentModule, PrismaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
