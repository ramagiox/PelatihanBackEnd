let bodyParser = require('body-parser');
let mong = require('mongoose');
let dbconnect = require("./config/dbmongo");
let ex = require('express');
let app = ex();
//route
app.use(bodyParser.json());
app.use('/', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

let surattugasRoute = require('./surattugas/surattugasRoute.js');
app.use('/api',surattugasRoute);

let tipepegawaiRoute = require('./tipepegawai/tipepegawaiRoute.js');
app.use('/api',tipepegawaiRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let surattugasrinciRoute = require('./surattugasrinci/surattugasrinciRoute.js');
app.use('/api',surattugasrinciRoute);

mong.connect('mongodb://ramagiox:mautauaja@ds113775.mlab.com:13775/dbpelatihan');


//mong.connect('mongodb://localhost:27017/DBPelatihan');
app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});