import config from './config';
import app from './server';
import * as dotenv from 'dotenv';
dotenv.config();
app.listen(config.port, () => {
    console.log('Server is listening on port 3000!');
}
);