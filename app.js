const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

const contactusRoutes = require('./routes/contactus.js');

const successRoutes = require('./routes/success.js');

const errorController = require('./controllers/error.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname , 'public')));

app.use('/admin' , adminRoutes);

app.use('/shop' , shopRoutes);

app.use(contactusRoutes);
const contactController = require('./controllers/contact.js');

app.get('/contactus' , contactController.getContactPage);


app.use(successRoutes);

app.use(errorController.get404Page );
 

app.listen(3000);