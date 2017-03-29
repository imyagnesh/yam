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
				name: fields.companyName,
				logo: {
					data: fs.readFileSync(files.companyLogo.path),
					contentType: files.companyLogo.type
				},
				website: fields.companyWebsite,
				description: fields.description,
			},
			designation: fields.designation,
			role: fields.role,
			joiningDate: fields.joiningDate,
			leavingDate: fields.leavingDate,
			isPressent: fields.isPressent,
			achievements: JSON.parse(fields.achievements),
			userId: decodeToken.sub,
		});

		save(workExp, res);
	});

};