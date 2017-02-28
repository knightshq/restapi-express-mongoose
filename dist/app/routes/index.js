'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

exports.userRouter = _users2.default;
exports.default = routes.get('/', function (req, res) {
	res.status(200).json({ message: 'Welcome to eventfly API!' });
});