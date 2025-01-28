import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import fastifyMultipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });
  const fastifyInstance = app.getHttpAdapter().getInstance();
  fastifyInstance.register(fastifyMultipart, {
    limits: {
      fileSize: 10000000,
    },
  });
  
  await app.listen(3000);
}
bootstrap();
