import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      numberInStock: 3,
    },
    {
      id: 2,
      name: 'Product 2',
      numberInStock: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      numberInStock: 7,
    },
    {
      id: 4,
      name: 'Product 4',
      numberInStock: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(dto: Product): object {
    this.products.push(dto);

    return { id: this.products.length.toString() };
  }
}
