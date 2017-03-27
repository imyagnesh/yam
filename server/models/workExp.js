const mongoose = require('mongoose');
const DetailSchema = require('./detail');

const WorkExpSchema = new mongoose.Schema({
	company: DetailSchema,
	designation:String,
	role: String,
	joiningDate: Date,
	leavingDate: Date,
	isPressent: Boolean,
	achievements: [String],
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
});

module.exports = mongoose.model('WorkExp', WorkExpSchema);