const mongoose = require('mongoose');
const TechnologySchema = require('./detail');

module.exports = mongoose.model('Technology', TechnologySchema);