import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import customerRoutes from './routes/customer.routes'

var corsOption = {
    origin: "http://localhost:3000"
}

const port = 8080;

const app = express();
createConnection();

// Middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(customerRoutes);

app.listen(port);
console.log('Server on port', port);