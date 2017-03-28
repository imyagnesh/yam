const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ContactInfo = mongoose.model('ContactInfo');
const utils = require('../utils');
const { upsert } = utils;
const config = require('../../config');

module.exports.saveContactInfo = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	const query = { userId: decodeToken.sub };

	const data = {
		address: {
			houseDetail: req.body.houseDetail,
			streetName: req.body.streetName,
			area: req.body.area,
			city: req.body.city,
			state: req.body.state,
			country: req.body.country,
			pincode: req.body.pincode,
			landmark: req.body.landmark,
		},
		mobile: req.body.mobile,
		email: req.body.email,
		website: req.body.website,
		userId: decodeToken.sub,
	};

	const options = {
		upsert: true,
		'new': true
	};

	upsert(ContactInfo, query, data, options, res);
};