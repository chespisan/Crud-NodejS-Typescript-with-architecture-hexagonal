import { ProductEntity } from './../../../domain/entities/product.entity';
import { NextFunction, Request, Response } from "express";
import { ProductUseCase } from '../../../application/usecases/products/product.useCase';
import { Document } from 'mongoose';

export default class ProductController {
  constructor(private readonly productUseCase: ProductUseCase) {
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this); 
    this.create = this.create.bind(this);  
  }
  
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productUseCase.getAll(); 
      this.responseRequest(res, 200, products, 'All products', true);
    } catch (error) {
      next(error);
      this.responseRequest(res, 500, null, 'Intente mas tarde', false);
    }
  }
  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.productId;
      const product = await this.productUseCase.getOne(productId);
      if(!product) {
        return this.responseRequest(res, 404, null, 'Product does not exist', true);
      }
      this.responseRequest(res, 200, product, 'Product', true);
    } catch (error) {
      next(error);
      this.responseRequest(res, 500, null, 'Intente mas tarde', false);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product: ProductEntity = req.body;
      const response = await this.productUseCase.create(product);
      this.responseRequest(res, 201, product, 'Successfully created product', true);
    } catch (error) {
      next(error);
      this.responseRequest(res, 500, null, 'Intente mas tarde', false);
    }
  }
  update(req: Request, res: Response) {}
  
  delete(req: Request, res: Response) {}

  responseRequest(res: Response, code: number, data: ProductEntity | ProductEntity[] | null, message: string, ok: boolean) {
    res.status(code).json({
      ok,
      data,
      message
    });
  }

}
