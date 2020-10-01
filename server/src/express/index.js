import express from 'express';
import morgan from 'morgan';
import cookie from 'cookie-parser';
import login from './login';

const app = express();

app.use(morgan('dev'));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', login);

export default app;
