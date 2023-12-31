const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/login', userController.loginUser);
router.post('/verify-otp', userController.verifyOTP);
router.post('/signUp', userController.signup);
router.post('/searchQuery',userController.searchQuery);
// router.post('/processData',userController.processData);

module.exports=router;