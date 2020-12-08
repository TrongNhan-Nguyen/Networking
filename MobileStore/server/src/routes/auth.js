const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
router.post("/sign-in",auth.signIn);
router.post("/sign-up",auth.signUp);

module.exports = router;