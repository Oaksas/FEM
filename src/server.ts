// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import { Productrouter, UpdatePointsRouter, UpdateRouter } from './Router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createUser, signInUser } from './handlers/user';
import { ErrorType } from './utils/enums';

// Create a new instance of the express server
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('PRODUCT API');
}
);

app.use('/api', protect, Productrouter)
app.use('/api', protect, UpdateRouter)
app.use('/api', protect, UpdatePointsRouter)

app.post('/user/', createUser)
app.post('/user/signin', signInUser)

app.use((err, req, res, next) => {
    if (err.type = ErrorType.Auth) {
        res.status(401).json({ message: "Authentication Error" })
    }
    else if (err.type = ErrorType.Validation) {
        res.status(400).json({ message: "Invalid Input" })
    }
    else {
        res.status(500).json({ message: "Internal Server Error" })
    }
})


export default app;