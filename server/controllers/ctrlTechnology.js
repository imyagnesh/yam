const mongoose = require('mongoose');
const Technology = mongoose.model('Technology');
const utils = require('../utils');
const { find } = utils;

module.exports.getTechnology = (req, res) => {
	find(Technology, {}, res);
};