let bodyParser = require('body-parser');
let mong = require('mongoose');
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

let datasewaRoute = require('./datasewa/datasewaRoute.js');
app.use('/api',datasewaRoute);

let dendaRoute = require('./denda/dendaRoute.js');
app.use('/api',dendaRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let kategoriRoute = require('./kategori/kategoriRoute.js');
app.use('/api',kategoriRoute);

let pembayaranRoute = require('./pembayaran/pembayaranRoute.js');
app.use('/api',pembayaranRoute);

let penyewaRoute = require('./penyewa/penyewaRoute.js');
app.use('/api',penyewaRoute);

let akunRoute = require('./akun/akunRoute.js');
app.use('/api',akunRoute);

let barangRoute = require('./barang/barangRoute.js');
app.use('/api',barangRoute);

mong.connect('mongodb://admin:admin@ds231205.mlab.com:31205/dbpenyewaan');


//mong.connect('mongodb://localhost:27017/DBPelatihan');
app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});