const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	projectName: String,
	technologyUsed: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Technology'
	}],
	Description: String,
	website: String,
	myRole: String,
	imgs: [{ type: mongoose.Schema.Types.ObjectId }],
	video: mongoose.Schema.Types.ObjectId,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, { versionKey: false });

module.exports = mongoose.model('Project', ProjectSchema);