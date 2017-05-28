const mongoose = require('mongoose');
const validator = require('validator');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);
var fs = require('fs');
const logger = require('../../logger');

module.exports = {

	sendJSONresponse: function (res, status, content) {
		res.status(status);
		res.json(content);
	},

	/**
	 * Validate the sign up form
	 *
	 * @param {object} payload - the HTTP body message
	 * @returns {object} The result of validation. Object contains a boolean validation result, errors tips, and a global message for a whole form.
	 */
	validateSignupForm: function (payload) {
		let isFormValid = true;
		const errors = {};
		let message = '';

		if (!payload.email || !validator.isEmail(payload.email)) {
			isFormValid = false;
			errors.email = 'Please provide a correct email address.';
		}

		if (!payload.password || !validator.isLength(payload.password, 8)) {
			isFormValid = false;
			errors.password = 'Password must have at least 8 characters.';
		}

		if (!payload.name || payload.name.trim().length === 0) {
			isFormValid = false;
			errors.name = 'Please provide your name.';
		}

		if (!isFormValid) {
			message = 'Check the form for errors.';
		}

		return {
			success: isFormValid,
			message,
			errors,
		};
	},

	/**
	 * Validate the login form
	 *
	 * @param {object} payload - the HTTP body message
	 * @returns {object} The result of validation. Object contains a boolean validation result, errors tips, and a global message for the whole form.
	 */
	validateLoginForm: function (payload) {
		let isFormValid = true;
		const errors = {};
		let message = '';

		if (!payload.email || payload.email.trim().length === 0) {
			isFormValid = false;
			errors.email = 'Please provide your email address.';
		}

		if (!payload.password || payload.password.trim().length === 0) {
			isFormValid = false;
			errors.password = 'Please provide your password.';
		}

		if (!isFormValid) {
			message = 'Check the form for errors.';
		}

		return {
			success: isFormValid,
			message,
			errors,
		};
	},

	upsert: function (model, query, data, options, res) {
		model.findOneAndUpdate(query, data, options, function (err, data) {
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
	},

	save: function (model, res) {
		model.save(function (err, data) {
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
	},

	findOne: function (model, query, res) {
		model.findOne(query, function (err, data) {
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
	},

	find: function (model, query, res) {
		model.find(query, function (err, data) {
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
	},

	uploadFile: function (fileToUpload) {
		return new Promise(function (resolve, reject) {
			var writeStream = gfs.createWriteStream({
				filename: fileToUpload.name,
				content_type: fileToUpload.type
			});

			fs.createReadStream(fileToUpload.path).pipe(writeStream);

			writeStream.on('close', function (file) {
				resolve(file._id);
			});
			writeStream.on("error", reject); // don't forget this!
		});


	},

	readFile: function (id) {
		return new Promise(function (resolve, reject) {
			gfs.findOne({
				_id: id,
			}, function (err, file) {
				if (err) logger.error(`GridFS read file error: ${err}, ID: ${id}`);
				//write content to file system
				var data = [];
				//read from mongodb
				var readstream = gfs.createReadStream({
					_id: file._id,
				});

				readstream.on('data', function (chunk) {
					data.push(chunk);
				});

				readstream.on('end', function () {
					data = Buffer.concat(data);
					resolve('data:' + file.contentType + ';base64,' + Buffer(data).toString('base64'));
				});

				readstream.on("error", reject);
			});
		});
	},

	deleteFile: function (id) {
		return new Promise(function (resolve, reject) {
			gfs.remove({
				_id: id
			}, function (err) {
				if (err) reject(err);
				resolve();
			});
		});
	}
};




