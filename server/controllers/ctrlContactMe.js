const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ContactMe = mongoose.model('ContactMe');
const utils = require('../utils');
const { upsert } = utils;
const config = require('../../config');

module.exports.saveContactMe = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	const query = { userId: decodeToken.sub };

	const data = {
		address: req.body.address,
		mobile: req.body.mobile,
		email: req.body.email,
		website: req.body.website,
		userId: decodeToken.sub,
	};

	const options = {
		upsert: true,
		'new': true
	};

	upsert(ContactMe, query, data, options, res);
};