import { ProductEntity } from '../../../domain/entities/product.entity';
import { ProductInterface } from '../../../domain/interfaces/product.interface';
import Product from '../../models/product/Product.model';

export default class MongoRepository implements ProductInterface {
  
  async getAll(): Promise<any> {
    const products = await Product.find();
    return products;
  }

  async getOne(id: string | number): Promise<any> {
    let product;
    try {
      product = await Product.findById(id);
      return product;
    } catch (error) {
      return product;
    }
  }

  async create(product: ProductEntity): Promise<any> {
    const { name, price, category, imgUrl } = product;
    const newProduct = new Product({name,category,price,imgUrl});
    const productSave = await newProduct.save();
    return productSave;
  }

  update(id: string | number, product: ProductEntity): ProductEntity {
    return product;
  }

  delete(id: string | number): ProductEntity {
    const product: ProductEntity = {};
    return product;
  }
}