const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'address is required.'],
	},
	logo: { data: Buffer, contentType: String },
	website: {
		type: String,
		required: [true, 'email is required.'],
	},
	description: String
}, { versionKey: false });

module.exports = DetailSchema;