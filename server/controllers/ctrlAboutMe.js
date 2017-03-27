const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AboutMe = mongoose.model('AboutMe');
const utils = require('../utils');
const { upsert } = utils;
const config = require('../../config');

module.exports.saveAboutMe = (req, res) => {
	const decodeToken = jwt.verify(req.headers.authorization.split(' ')[1], config.jwtSecret);

	const query = { userId: decodeToken.sub, language: req.body.language };

	const data = {
		aboutMe: req.body.aboutMe,
		funFacts: req.body.funFacts,
		passion: req.body.passion,
		mylife: req.body.mylife,
		language: req.body.language,
		userId: decodeToken.sub,
	};

	const options = {
		upsert: true,
		'new': true
	};

	upsert(AboutMe, query, data, options, res);
};