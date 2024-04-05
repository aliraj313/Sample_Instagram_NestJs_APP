import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './service/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.get(PrismaService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { excludeExtraneousValues: true },
    }),
  );
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`app running on port ${PORT}`);
}
bootstrap();
