import express from 'express';

import User from '../models/user';

const userRouter = express.Router();

//Get all users
userRouter.get('/', (req, res) => {
	User.find((err, users) => {
		if(err)
			res.send(err);

		res.status(200).json(users);
	});
});

//Get a user a with a specific Id
userRouter.get('/:user_id', (req, res) => {
	User.findById(req.params.user_id, (err, user) => {
		if(err)
			res.send(err);

		res.status(200).json(user);
	});
});

//Add a user
userRouter.post('/', (req, res) => {
	let user = new User();

	user.username = req.body.username,
	user.email = req.body.email

	user.save((err) => {
		if(err)
			res.send(err);

		res.status(200).json({ message: 'User successfully created.'});
	})
});


//Update a user
userRouter.put('/:user_id', (req, res) => {
	User.findById(req.params.user_id, (err, user) => {
		if(err)
			res.send(err);

		user.username = req.body.username

		user.save((err) => {
			if(err)
				res.send(err);

			res.status(200).json({ message: 'User successfully updated.'});
		});
	});
});

export default userRouter;