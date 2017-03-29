const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Education = mongoose.model('Education');
const utils = require('../utils');
const { save, find } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.saveEducation = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const education = new Education({
			collage: {
				name: fields.collageName,
				logo: {
					data: fs.readFileSync(files.collageLogo.path),
					contentType: files.collageLogo.type
				},
				website: fields.collageWebsite,
				description: fields.description,
			},
			university: fields.university,
			degree: fields.degree,
			joiningDate: fields.joiningDate,
			leavingDate: fields.leavingDate,
			percentage: fields.percentage,
			achievements: JSON.parse(fields.achievements),
			userId: decodeToken.sub,
		});

		save(education, res);
	});

};

module.exports.getEducation = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);
	const query = { userId: decodeToken.sub };
	find(Education, query, res);
};