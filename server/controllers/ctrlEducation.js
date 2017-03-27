const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Education = mongoose.model('Education');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.saveEducation = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const education = new Education({
			collage: {
				name: req.body.collageName,
				logo: {
					data: fs.readFileSync(files.collageLogo.path),
					contentType: files.collageLogo.type
				},
				website: req.body.collageWebsite,
				description: req.body.description,
			},
			university: req.body.university,
			degree: req.body.degree,
			joiningDate: req.body.joiningDate,
			leavingDate: req.body.leavingDate,
			percentage: req.body.percentage,
			achievements: req.body.achievements,
			userId: decodeToken.sub,
		});

		save(education, res);
	});

};