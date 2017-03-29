const mongoose = require('mongoose');
const DetailSchema = require('./detail');

const EducationSchema = new mongoose.Schema({
	collage: DetailSchema,
	university: String,
	degree: String,
	joiningDate: Date,
	leavingDate: Date,
	percentage: Number,
	achievements: [String],
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, { versionKey: false });

module.exports = mongoose.model('Education', EducationSchema);