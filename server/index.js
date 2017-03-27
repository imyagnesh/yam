const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../logger');

let mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL;

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  const mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
  const mongoHost = process.env[`${mongoServiceName}_SERVICE_HOST`];
  const mongoPort = process.env[`${mongoServiceName}_SERVICE_PORT`];
  const mongoDatabase = process.env[`${mongoServiceName}_DATABASE`];
  const mongoPassword = process.env[`${mongoServiceName}_PASSWORD`];
  const mongoUser = process.env[`${mongoServiceName}_USER`];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += `${mongoUser}:${mongoPassword}@`;
    }
    // Provide UI label that excludes user id and pw
    // mongoURLLabel += `${mongoHost}:${mongoPort}/${mongoDatabase}`;
    mongoURL += `${mongoHost}:${mongoPort}/${mongoDatabase}`;
  }
} else if (mongoURL == null && !process.env.DATABASE_SERVICE_NAME) {
  mongoURL = config.dbUri;
}

// let dbURI = 'mongodb://localhost/yam';
// if (process.env.NODE_ENV === 'production') {
//   dbURI = process.env.MONGOLAB_URI;
// }
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
	logger.info(`Mongoose connected to ${mongoURL}`);
});
mongoose.connection.on('error', (err) => {
	logger.error(`Mongoose connection error: ' ${err}, mongoURL: ${mongoURL}`);
});
mongoose.connection.on('disconnected', () => {
	logger.info('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
		logger.info(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app termination', () => {
    process.exit(0);
  });
});

require('./models/user');
require('./models/personalInfo');
require('./models/aboutMe');
require('./models/contactInfo');
require('./models/education');
require('./models/projects');
require('./models/skill');
require('./models/socialMedia');
require('./models/technology');
require('./models/workExp');
