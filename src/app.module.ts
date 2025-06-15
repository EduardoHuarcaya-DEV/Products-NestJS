import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeOrmModule para la conexión a la base de datos
import { ConfigModule } from '@nestjs/config'; // Importar ConfigModule para variables de entorno
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: process.env.DB_HOST, // Host de la base de datos
      port: Number(process.env.DB_PORT), // Puerto por defecto de PostgreSQL
      username: process.env.DB_USERNAME, // Nombre de usuario de la base de datos
      password: process.env.DB_PASSWORD, // Contraseña de la base de datos
      database: process.env.DB_NAME, // Nombre de la base de datos
      autoLoadEntities: true, // Cargar automáticamente las entidades
      synchronize: true, // Sincronizar la base de datos (no recomendado en producción)
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
