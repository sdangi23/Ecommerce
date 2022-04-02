const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact.js');

router.get('/contactus' , contactController.getContactPage);

router.post('/contactus' , (req,res, next) => {
  res.redirect('/'); 
})

module.exports = router;