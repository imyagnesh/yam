const utils = require('../utils');

module.exports.getFile = (req, res) => {
	utils.readFile(req.params.id)
		.then(data => res.status(200).json({
			success: true,
			message: "Personal Information Saved.",
			data: data,
		}))
		.catch(err => res.status(400).json({
			success: false,
			message: err.message,
		}));
};
