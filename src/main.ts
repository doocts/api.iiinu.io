import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCsrf from '@fastify/csrf-protection';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    app.enableCors();
    app.register(fastifyCsrf);
    await app.listen(3000, '0.0.0.0');
  } catch (error) {
    console.error('Error during bootstrap:', error);
    process.exit(1);
  }
}
bootstrap();
