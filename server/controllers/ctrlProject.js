const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Project = mongoose.model('Project');
const Technology = mongoose.model('Technology');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');
const fs = require('fs');

module.exports.saveProject = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {

		const imgs = [];

		Object.keys(files).map(key => {
			if (key.includes('ProjectImages', 0)) {
				imgs.push({
					data: fs.readFileSync(files[key].path),
					contentType: files[key].type
				});
			}
		});

		const project = new Project({
			projectName: fields.projectName,
			technologyUsed: fields.technologyUsed.split(","),
			Description: fields.Description,
			website: fields.website,
			myRole: fields.myRole,
			imgs: imgs,
			video: {
				data: fs.readFileSync(files.ProjectVideo.path),
				contentType: files.ProjectVideo.type
			},
			userId: decodeToken.sub,
		});

		save(project, res);
	});

};

module.exports.getProjects = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);
	const query = { userId: decodeToken.sub };
	Project.find(query).populate('technologyUsed').exec(function (err, data) {
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