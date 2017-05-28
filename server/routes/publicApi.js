const express = require('express');
const router = express.Router();

const ctrlInsta = require('../controllers/ctrlInsta');
const ctrlTwitter = require('../controllers/ctrlTwitter');
const ctrlAuth = require('../controllers/ctrlAuth');
const ctrlTechnology = require('../controllers/ctrlTechnology');
const ctrlPersonalInfo = require('../controllers/ctrlPersonalInfo');
const ctrlAboutMe = require('../controllers/ctrlAboutMe');
const ctrlContactInfo = require('../controllers/ctrlContactInfo');
const ctrlEducation = require('../controllers/ctrlEducation');
const ctrlSkill = require('../controllers/ctrlSkill');
const ctrlWorkExp = require('../controllers/ctrlWorkExp');
const ctrlProject = require('../controllers/ctrlProject');
const ctrlFile = require('../controllers/ctrlFile');

router.get('/instaImages', ctrlInsta.instaImages);
router.get('/tweets', ctrlTwitter.tweets);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/isUserUnique/:email', ctrlAuth.isUserUnique);

router.get('/getTechnology', ctrlTechnology.getTechnology);
router.get('/getPersonalInfo', ctrlPersonalInfo.getPersonalInfo);
router.get('/getAboutMe/:language', ctrlAboutMe.getAboutMe);
router.get('/getContactInfo', ctrlContactInfo.getContactInfo);
router.get('/getEducation', ctrlEducation.getEducation);
router.get('/getWorkExp', ctrlWorkExp.getWorkExp);
router.get('/getSkills', ctrlSkill.getSkills);
router.get('/getProjects', ctrlProject.getProjects);
router.get('/getFile/:id', ctrlFile.getFile);

module.exports = router;
