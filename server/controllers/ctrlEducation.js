const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Education = mongoose.model('Education');
const utils = require('../utils');
const { save, find } = utils;
const config = require('../../config');
const formidable = require('formidable');

module.exports.saveEducation = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);
	form.parse(req, function (err, fields, files) {
		utils.uploadFile(files.collageLogo).then(data => {
			const education = new Education({
				collage: {
					name: fields.collageName,
					logo: data,
					website: fields.collageWebsite,
					description: fields.description,
				},
				university: fields.university,
				degree: fields.degree,
				joiningDate: fields.joiningDate,
				leavingDate: fields.leavingDate,
				percentage: fields.percentage,
				achievements: fields.achievements.split(","),
				userId: decodeToken.sub,
			});

			save(education, res);
		}).catch(err => {
			res.status(400).json({
				success: false,
				message: err.message,
			});
		});
	});

};

module.exports.getEducation = (req, res) => {
	find(Education, {}, res);
};