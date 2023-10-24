import { error } from 'console';
import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
export const UpdateRouter = Router();

UpdateRouter.get('/update', () => {
})
import { check } from 'express-validator';
import { handleInputValidation } from '../../modules/middleware';

UpdateRouter.get('/update/:id', () => {
})
UpdateRouter.post('/update',
    check('title').exists(),
    check('body').exists(), handleInputValidation,
    (req, res) => {


    })
UpdateRouter.put('/update/:id',
    check('title').optional(),
    check('body').optional(),
    check('status').isIn(['IN_PROGRESS', 'DONE', 'DEPRECATED']),
    check('version').optional(), handleInputValidation,
    (req, res) => {


    })
UpdateRouter.delete('/update/:id', () => {
})

