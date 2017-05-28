const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Skill = mongoose.model('Skill');
const Technology = mongoose.model('Technology');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');

module.exports.saveSkill = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {
		utils.uploadFile(files.skillLogo).then(data => {
			const technology = new Technology({
				name: fields.skillName,
				logo: data,
				website: fields.website,
				description: fields.description,
			});

			const skill = new Skill({
				ratting: fields.ratting,
				userId: decodeToken.sub,
			});

			technology.save(function (err, data) {
				if (err) {
					res.status(400).json({
						success: false,
						message: err.message,
					});
					return;
				}
				skill.technology = data._id;
				save(skill, res);
			}).catch(err => {
				res.status(400).json({
					success: false,
					message: err.message,
				});
			});
		});

	});

};

module.exports.getSkills = (req, res) => {
	Skill.find({}).populate('technology').exec(function (err, data) {
		if (err) {
			res.status(400).json({
				success: false,
				message: err.message,
			});
			return;
		}
		res.status(200).json({
			success: true,
			message: "Personal Information Saved.",
			data: data,
		});
	});

};