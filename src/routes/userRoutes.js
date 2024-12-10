const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/test', (req,res)=> res.status(200).json({status:200, message:'It works c:'}))
// Add more routes for getting user, updating user, etc.

module.exports = router;