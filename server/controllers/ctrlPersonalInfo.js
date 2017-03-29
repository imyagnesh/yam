const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const PersonalInfo = mongoose.model('PersonalInfo');
const utils = require('../utils');
const { upsert, findOne } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.savePersonalInfo = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const query = { userId: decodeToken.sub };

		const data = {
			name: {
				first: fields.firstName,
				last: fields.lastName,
			},
			userId: decodeToken.sub,
			designation: fields.designation,
			smallImage: {
				data: fs.readFileSync(files.smallImage.path),
				contentType: files.smallImage.type
			},
			largeImage: {
				data: fs.readFileSync(files.largeImage.path),
				contentType: files.largeImage.type
			},
			resume: {
				data: fs.readFileSync(files.resume.path),
				contentType: files.resume.type
			},
		};

		const options = {
			upsert: true,
			'new': true
		};

		upsert(PersonalInfo, query, data, options, res);
	});
};

module.exports.getPersonalInfo = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);
	const query = { userId: decodeToken.sub };
	findOne(PersonalInfo, query, res);
};