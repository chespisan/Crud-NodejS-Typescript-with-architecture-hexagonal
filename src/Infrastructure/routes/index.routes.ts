import express, { Application } from 'express';
import { productRouter } from './product/products.routes';

class IndexRouter {
  public router: Application;

  constructor() {
    this.router = express();
    this.routes();
  }

  routes() {
    this.router.use(productRouter);
  }
}

export default new IndexRouter().router;