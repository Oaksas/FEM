// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import { Productrouter, UpdatePointsRouter, UpdateRouter } from './Router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createUser, signInUser } from './handlers/user';

// Create a new instance of the express server
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api', protect, Productrouter)
app.use('/api', protect, UpdateRouter)
app.use('/api', protect, UpdatePointsRouter)

app.post('/user/', createUser)
app.post('/user/signin', signInUser)

export default app;