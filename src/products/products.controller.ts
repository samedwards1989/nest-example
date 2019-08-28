import { Controller, Get, Post, Body } from '@nestjs/common';

import { ProductService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll(): Product[] {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() dto: Product): object {
    return this.productService.addProduct(dto);
  }
}
