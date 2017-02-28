import express from 'express';
import userRouter from './users';

const routes = express.Router();

export { userRouter };

export default routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome to eventfly API!'});
});