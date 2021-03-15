//core modules of node js
const http = require('http');
const path = require('path');

//importing express js and third party plug in
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

//importing routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//project modules
const rootDir = require('./util/path');
const extendedController = require('./controllers/extended');


const app = express();

// app.engine('handlebars', expressHbs());

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin/', adminRoutes.routes);
app.use(shopRoutes);
app.use(extendedController.pageNotFound);


app.listen(3000);