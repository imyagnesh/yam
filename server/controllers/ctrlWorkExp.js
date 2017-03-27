const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const WorkExp = mongoose.model('WorkExp');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.saveWorkExp = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const workExp = new WorkExp({
			company: {
				name: req.body.companyName,
				logo: {
					data: fs.readFileSync(files.companyLogo.path),
					contentType: files.companyLogo.type
				},
				website: req.body.companyWebsite,
				description: req.body.description,
			},
			designation: req.body.university,
			role: req.body.degree,
			joiningDate: req.body.joiningDate,
			leavingDate: req.body.leavingDate,
			isPressent: req.body.isPressent,
			achievements: req.body.achievements,
			userId: decodeToken.sub,
		});

		save(workExp, res);
	});

};