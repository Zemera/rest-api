import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.static(join(process.cwd(), '')));
  const config = new DocumentBuilder()
  .setTitle('koram cms api documentation')
  .setDescription('This api describe the route , request and response')
  .setVersion('1.0')
  .addTag('koracms')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-documentation', app, document);
  await app.listen(3000);
}
bootstrap();
