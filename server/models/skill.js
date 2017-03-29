const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
	technology: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Technology'
	},
	ratting: Number,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, { versionKey: false });

module.exports = mongoose.model('Skill', SkillSchema);