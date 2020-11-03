import { ProductEntity } from "../entities/product.entity";

export interface ProductInterface {
  getOne(id: number | string): Promise<ProductEntity>;
  getAll(): Promise<Array<ProductEntity>>;
  create(product: ProductEntity): Promise<ProductEntity>;
  update(id: number | string, product: ProductEntity): ProductEntity;
  delete(id: number | string): ProductEntity;
}