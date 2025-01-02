import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });
  const fastifyInstance = app.getHttpAdapter().getInstance();
  fastifyInstance.register(multipart);
  
  await app.listen(3000);
}
bootstrap();
