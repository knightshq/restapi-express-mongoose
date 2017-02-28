'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();

//Get all users
userRouter.get('/', function (req, res) {
	_user2.default.find(function (err, users) {
		if (err) res.send(err);

		res.status(200).json(users);
	});
});

//Get a user a with a specific Id
userRouter.get('/:user_id', function (req, res) {
	_user2.default.findById(req.params.user_id, function (err, user) {
		if (err) res.send(err);

		res.status(200).json(user);
	});
});

//Add a user
userRouter.post('/add', function (req, res) {
	var user = new _user2.default();

	user.username = req.body.username, user.email = req.body.email;

	user.save(function (err) {
		if (err) res.send(err);

		res.status(200).json({ message: 'User successfully created.' });
	});
});

//Update a user
userRouter.put('/:user_id', function (req, res) {
	_user2.default.findById(req.params.user_id, function (err, user) {
		if (err) res.send(err);

		user.username = req.body.username;

		user.save(function (err) {
			if (err) res.send(err);

			res.status(200).json({ message: 'User successfully updated.' });
		});
	});
});

exports.default = userRouter;