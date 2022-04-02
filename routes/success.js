const express = require('express');

const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const successController = require('../controllers/success.js');

router.use('/success' , successController.getSuccessPage);

// router.post('/success' , (req,res, next) => {
//   res.redirect('/'); 
// })

module.exports = router;