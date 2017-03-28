const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
	address: {
		houseDetail: String,
		streetName: String,
		area: String,
		city: String,
		state: String,
		country: String,
		pincode: Number,
		landmark: String,
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

module.exports = mongoose.model('ContactInfo', ContactInfoSchema);