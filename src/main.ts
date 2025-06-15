import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en el DTO
    transform: true, // transforma tipos automaticamente
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
  }))
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
