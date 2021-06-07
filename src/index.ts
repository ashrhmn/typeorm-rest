import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection } from 'typeorm'

import userRoutes from './routes/user.routes'

var corsOption = {
    origin: process.env.ORIGIN || "http://localhost:3000"
}

const port = process.env.PORT || 8080;

const app = express();
createConnection();

// Middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);

app.listen(port);
console.log('Server on port', port);