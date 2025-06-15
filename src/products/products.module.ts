import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeOrmModule
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity'; // Importar la entidad de Product

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Importar la entidad Product para TypeORM
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
