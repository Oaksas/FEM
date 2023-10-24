import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { handleInputValidation } from '../../modules/middleware';
import { createProduct, deleteProductById, getProductById, getProducts, updateProduct } from '../../handlers/product';


export const Productrouter = Router();

Productrouter.get('/product', getProducts)
Productrouter.get('/product/:id', getProductById)

Productrouter.put('/product/:id', body('name').isString(), handleInputValidation, updateProduct)
Productrouter.post('/product',
    body('name').isString(),
    body('description').isString(),
    handleInputValidation, createProduct)

Productrouter.delete('/product/:id', deleteProductById)
