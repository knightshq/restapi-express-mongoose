import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//importing routes
import index, { userRouter } from './app/routes/index';

let app  = express();

mongoose.connect(`mongodb://127.0.0.1:27017/flyevent`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let PORT = process.env.PORT || 8080;

let router = express.Router();

app.use('/', index);
app.use('/users', userRouter);

app.use('/api', router);

let server = app.listen(PORT, 'localhost', function (){
	let host = server.address().address;
	let port = server.address().port;
	
	console.log('Server listening at http://%s:%s', host, port);
});