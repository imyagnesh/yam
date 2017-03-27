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
	imgs: [{ data: Buffer, contentType: String }],
	video: {
		fileName: String,
		resumeId: mongoose.Schema.Types.ObjectId,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
});

module.exports = mongoose.model('Project', ProjectSchema);