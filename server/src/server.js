import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import indexRouter from './routes/indexRouter';
import resLocals from './middlewares/resLocals';

require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(resLocals);

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
