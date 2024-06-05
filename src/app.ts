import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const { PORT } = process.env;
import router from './routes/router';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));

// routes
app.use('/api', router);
