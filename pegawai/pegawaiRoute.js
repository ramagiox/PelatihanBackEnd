let ex = require('express');
let route = ex.Router();
let pegawaiController = require('./pegawaiController.js')

route.get('/pegawai', function (req, res) {
    pegawaiController.getPegawai(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/pegawai/:_id', function (req, res) {
    let id = req.params._id;
    pegawaiController.getPegawaiById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pegawai', function (req, res) {
    let pegawai = req.body;
    pegawaiController.createPegawai(pegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pegawai/:_id', function (req, res) {

    pegawaiController.deletePegawai(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pegawai/:_id', function (req, res) {
    let pegawai = req.body;
    pegawaiController.updatePegawai(req.params._id,pegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;