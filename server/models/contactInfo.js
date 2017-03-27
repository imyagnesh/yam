const mongoose = require('mongoose');

const ContactMeSchema = new mongoose.Schema({
	address: {
		type: String,
		required: [true, 'address is required.'],
	},
	mobile: {
		type: Number,
		required: [true, 'mobile is required.'],
	},
	email: {
    type: String,
    required: [true, 'email is required.'],
  },
	website: {
    type: String,
    required: [true, 'website is required.'],
  },
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
});

module.exports = mongoose.model('ContactMe', ContactMeSchema);