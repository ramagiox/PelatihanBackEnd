let ex = require('express');
let route = ex.Router();
let tipepegawaiController = require('./tipepegawaiController.js')

route.get('/tipepegawai', function (req, res) {
    tipepegawaiController.getTipePegawai(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/tipepegawai/:_id', function (req, res) {
    tipepegawaiController.getTipePegawaiById(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/tipepegawai', function (req, res) {
    let tipepegawai = req.body;
    tipepegawaiController.createTipePegawai(tipepegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/tipepegawai/:_id', function (req, res) {

    tipepegawaiController.deleteTipePegawai(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/tipepegawai/:_id', function (req, res) {
    let tipepegawai = req.body;
    tipepegawaiController.updateTipePegawai(req.params._id,tipepegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;