import { Router } from 'express';
import { ProductUseCase } from '../../../application/usecases/products/product.useCase';
import ProductController from '../../controllers/product/productController';
import MongoRepository from '../../repositories/mongo/mongo.repository';

export const productRouter = Router();

const mongoRepository = new MongoRepository();
const productUseCase = new ProductUseCase(mongoRepository); 
const productCtrl = new ProductController(productUseCase);

productRouter.get('/products', productCtrl.getAll);
productRouter.get('/products/:productId', productCtrl.getOne);
productRouter.post('/products', productCtrl.create);
productRouter.put('/products/:productId', productCtrl.update);
productRouter.delete('/products/:productId', productCtrl.delete);

