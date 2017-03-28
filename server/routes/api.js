const express = require('express');
const router = express.Router();

const ctrlPersonalInfo = require('../controllers/ctrlPersonalInfo');
const ctrlAboutMe = require('../controllers/ctrlAboutMe');
const ctrlContactInfo = require('../controllers/ctrlContactInfo');
const ctrlEducation = require('../controllers/ctrlEducation');
const ctrlSkill = require('../controllers/ctrlSkill');
const ctrlWorkExp = require('../controllers/ctrlWorkExp');

router.post('/savePersonalInfo', ctrlPersonalInfo.savePersonalInfo);
router.post('/saveAboutMe', ctrlAboutMe.saveAboutMe);
router.post('/saveContactInfo', ctrlContactInfo.saveContactInfo);
router.post('/saveEducation', ctrlEducation.saveEducation);
router.post('/saveSkill', ctrlSkill.saveSkill);
router.post('/saveWorkExp', ctrlWorkExp.saveWorkExp);

module.exports = router;
