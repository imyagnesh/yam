const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const PersonalInfo = mongoose.model('PersonalInfo');
const utils = require('../utils');
const { upsert, findOne } = utils;
const config = require('../../config');
const formidable = require('formidable');

module.exports.savePersonalInfo = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const query = { userId: decodeToken.sub };

		var uploadSmallImage = utils.uploadFile(files.smallImage);
		var uploadLargeImage = utils.uploadFile(files.largeImage);
		var uploadResume = utils.uploadFile(files.resume);

		Promise.all([uploadSmallImage, uploadLargeImage, uploadResume]).then(values => {
			const data = {
				name: {
					first: fields.firstName,
					last: fields.lastName,
				},
				userId: decodeToken.sub,
				designation: fields.designation,
				smallImage: values[0],
				largeImage: values[1],
				resume: values[2],
			};

			const options = {
				upsert: true,
				'new': true
			};

			upsert(PersonalInfo, query, data, options, res);

		}, err => {
			res.status(400).json({
					success: false,
					message: err.message,
				});
		});
	});
};

module.exports.getPersonalInfo = (req, res) => {
	findOne(PersonalInfo, {}, res);
};