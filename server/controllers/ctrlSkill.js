const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Skill = mongoose.model('Skill');
const Technology = mongoose.model('Technology');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.saveSkill = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const technology = new Technology({
			name: fields.skillName,
			logo: {
				data: fs.readFileSync(files.skillLogo.path),
				contentType: files.skillLogo.type
			},
			website: fields.website,
			description:fields.description,
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
		});
		
	});

};