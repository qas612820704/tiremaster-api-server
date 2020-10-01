import express from 'express';
import morgan from 'morgan';
import cookie from 'cookie-parser';
import authentication from './authentication';

const app = express();

app.use(morgan('dev'));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authentication);

export default app;
