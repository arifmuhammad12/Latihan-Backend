const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const VERSION = process.env.VERSION

// get modules here
const v1FormsModule = require('../modules/v1/forms/forms');

// setting body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// setting header security
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTION') {
        res.header('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE');
        return res.json({});
    }
    next();
});

console.log("VERSION", VERSION)

// use the modules here
app.use('/v1/forms', v1FormsModule)

// training
app.get('/testing', (req, res) => {
    res.json("Hallo")
})

module.exports = app