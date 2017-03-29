const express = require('express');
const router = express.Router();

const ctrlPersonalInfo = require('../controllers/ctrlPersonalInfo');
const ctrlAboutMe = require('../controllers/ctrlAboutMe');
const ctrlContactInfo = require('../controllers/ctrlContactInfo');
const ctrlEducation = require('../controllers/ctrlEducation');
const ctrlSkill = require('../controllers/ctrlSkill');
const ctrlWorkExp = require('../controllers/ctrlWorkExp');
const ctrlTechnology = require('../controllers/ctrlTechnology');

router.post('/savePersonalInfo', ctrlPersonalInfo.savePersonalInfo);
router.post('/saveAboutMe', ctrlAboutMe.saveAboutMe);
router.post('/saveContactInfo', ctrlContactInfo.saveContactInfo);
router.post('/saveEducation', ctrlEducation.saveEducation);
router.post('/saveSkill', ctrlSkill.saveSkill);
router.post('/saveWorkExp', ctrlWorkExp.saveWorkExp);


router.get('/getPersonalInfo', ctrlPersonalInfo.getPersonalInfo);
router.get('/getAboutMe/:language', ctrlAboutMe.getAboutMe);
router.get('/getContactInfo', ctrlContactInfo.getContactInfo);
router.get('/getEducation', ctrlEducation.getEducation);
router.get('/getWorkExp', ctrlWorkExp.getWorkExp);
router.get('/getSkills', ctrlSkill.getSkills);
router.get('/getTechnology', ctrlTechnology.getTechnology);

module.exports = router;
