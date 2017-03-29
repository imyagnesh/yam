const mongoose = require('mongoose');

const PersonalInfoSchema = new mongoose.Schema({
	name: {
		first: {
			type: String,
			required: [true, 'First Name is required.'],
		},
		last: {
			type: String,
			required: [true, 'First Name is required.'],
		},
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	designation: {
		type: String,
		required: [true, 'Designation is required.'],
	},
	smallImage: { data: Buffer, contentType: String },
	largeImage: { data: Buffer, contentType: String },
	resume: { data: Buffer, contentType: String }
}, { versionKey: false });

module.exports = mongoose.model('PersonalInfo', PersonalInfoSchema);
