import { error } from 'console';
import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
export const UpdateRouter = Router();

UpdateRouter.get('/update', () => {
})
import { check } from 'express-validator';
import { handleInputValidation } from '../../modules/middleware';
import { createUpdate, deleteUpdateById, getUpdateById, getUpdates, updateUpdate } from '../../handlers/update';

UpdateRouter.get('/update/', getUpdates)
UpdateRouter.get('/update/:id', getUpdateById)
UpdateRouter.post('/update',
    check('title').exists().isString(),
    check('body').exists().isString(),
    check('productId').exists().isString(),

    handleInputValidation,
    createUpdate)
UpdateRouter.put('/update/:id',
    check('title').optional(),
    check('body').optional(),
    check('status').isIn(['IN_PROGRESS', 'DONE', 'DEPRECATED']).optional(),
    check('version').optional(), handleInputValidation,
    updateUpdate)
UpdateRouter.delete('/update/:id', deleteUpdateById)
UpdateRouter.use((err, req, res, next) => {
    next(err)
})


