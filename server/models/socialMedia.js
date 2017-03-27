const mongoose = require('mongoose');
const DetailSchema = require('./detail');

const SocialMediaSchema = new mongoose.Schema({
	socialMediaDetail: DetailSchema,
	url: String,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);