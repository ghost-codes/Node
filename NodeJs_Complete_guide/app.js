//core modules of node js
const http = require('http');
const path = require('path');

//importing express js and third party plug in
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

//importing routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

//project modules
const rootDir = require('./util/path');


const app = express();

// app.engine('handlebars', expressHbs());

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin/', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: "404-Page Not Found" });
});


app.listen(3000);