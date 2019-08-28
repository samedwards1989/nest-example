import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ProductService } from './products.service';
import { Product } from './product.model';
import { getEnabledCategories } from 'trace_events';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getProducts();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() dto: Product): object {
    return this.productService.addProduct(dto);
  }
}
