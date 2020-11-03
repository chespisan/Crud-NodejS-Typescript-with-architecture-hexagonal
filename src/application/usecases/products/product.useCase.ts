import { ProductEntity } from './../../../domain/entities/product.entity';
import { ProductInterface } from '../../../domain/interfaces/product.interface';

export class ProductUseCase {  
  constructor(private readonly repository: ProductInterface) {}

  getAll() {
    const products = this.repository.getAll();
    return products;
  }
  getOne(productId: number | string) {
    const product = this.repository.getOne(productId);
    return product;
  }
  create(product: ProductEntity) {
    const newProduct = this.repository.create(product);
    return newProduct;
  }
  update() {}
  delete() {}
}