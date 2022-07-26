import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('服务启动');
  await app.listen(3000, () => {
    logger.log('http://localhost:3000');
  });
};
bootstrap();
