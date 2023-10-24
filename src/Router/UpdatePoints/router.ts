import { Router } from 'express';
import { handleInputValidation } from '../../modules/middleware';
import { check } from 'express-validator';
export const UpdatePointsRouter = Router();

UpdatePointsRouter.get('/updatepoint', () => {
})
UpdatePointsRouter.get('/updatepoint/:id', () => {
})
UpdatePointsRouter.put('/updatepoint/:id',
    check('name').optional().isString(),
    check('description').optional().isString(), handleInputValidation, (req, res) => {
    }
)
UpdatePointsRouter.post('/updatepoint',
    check('name').exists().isString(),
    check('description').exists().isString(),
    check('updateId').exists().isString(),

    handleInputValidation, (req, res) => {
    })

UpdatePointsRouter.delete('/updatepoint/:id', () => {
})

