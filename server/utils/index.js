const validator = require('validator');

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
			console.log(err);
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

};




