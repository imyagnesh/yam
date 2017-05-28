const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Project = mongoose.model('Project');
const utils = require('../utils');
const { save } = utils;
const config = require('../../config');
const formidable = require('formidable');

module.exports.saveProject = (req, res) => {
	const form = new formidable.IncomingForm();
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	form.parse(req, function (err, fields, files) {
		const uploads = [];
		Object.keys(files).map(key => {
			if (key.includes('ProjectImages', 0)) {
				uploads.push(utils.uploadFile(files[key]));
			}
		});
		uploads.push(utils.uploadFile(files.ProjectVideo));
		Promise.all(uploads).then(values => {
			var video = values.splice(-1, 1);
			const project = new Project({
				projectName: fields.projectName,
				technologyUsed: fields.technologyUsed.split(","),
				Description: fields.Description,
				website: fields.website,
				myRole: fields.myRole,
				imgs: values,
				video: video,
				userId: decodeToken.sub,
			});

			save(project, res);
		}).catch(err => {
			res.status(400).json({
				success: false,
				message: err.message,
			});
		});
	});

};

module.exports.getProjects = (req, res) => {
	Project.find({}).populate('technologyUsed').exec(function (err, data) {
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