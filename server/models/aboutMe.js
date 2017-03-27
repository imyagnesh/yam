const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
	aboutMe: {
		type: String,
		required: [true, 'About Me is required.'],
	},
	funFacts: String,
	passion: String,
	mylife: String,
	language: {
		type: String,
		unique: [true, 'Language should be unique.'],
		enum: ['en', 'de'],
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
});

module.exports = mongoose.model('AboutMe', AboutMeSchema);