import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './Router/authRoute.js';
import messageRoutes from './Router/messageRoute.js';
import UserRoutes from './Router/userRoute.js';
import connectToMoongose from './DbConnection/MongoConn.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);

app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);
app.use('/users', UserRoutes);

app.listen(PORT, () => {
	connectToMoongose();
	console.log(`Server running at ${PORT}`);
});
