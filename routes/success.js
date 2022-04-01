const express = require('express');

const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.use('/success' , (req,res, next) => {
  res.sendFile(path.join(rootDir , 'views' , 'success.html'));
})

// router.post('/success' , (req,res, next) => {
//   res.redirect('/'); 
// })

module.exports = router;