const express = require('express');
const router = express.Router();

const ctrlInsta = require('../controllers/ctrlInsta');
const ctrlTwitter = require('../controllers/ctrlTwitter');
const ctrlAuth = require('../controllers/ctrlAuth');
const ctrlTechnology = require('../controllers/ctrlTechnology');

router.get('/instaImages', ctrlInsta.instaImages);
router.get('/tweets', ctrlTwitter.tweets);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/isUserUnique/:email', ctrlAuth.isUserUnique);
// router.get('/getUsers/:query/:role', auth, ctrlAuth.getUsers);
router.get('/getTechnology', ctrlTechnology.getTechnology);

module.exports = router;
