import { Router } from 'express';

export const Productrouter = Router();

Productrouter.get('/product', (req, res) => {
    res.send('Hello World!')
})
Productrouter.get('/product/:id', () => {
})
Productrouter.post('/product', () => {
})

Productrouter.delete('/product/:id', () => {
})

