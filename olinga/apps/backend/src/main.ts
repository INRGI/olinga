import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import fastifyMultipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const port  = process.env.PORT || 3000;

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: "Content-Type,Authorization",
  });
  const fastifyInstance = app.getHttpAdapter().getInstance();
  fastifyInstance.register(fastifyMultipart, {
    limits: {
      fileSize: 10000000,
    },
  });
  
  await app.listen(port);
}
bootstrap();
