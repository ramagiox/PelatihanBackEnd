let ex = require('express');
let route = ex.Router();
let surattugasController = require('./surattugasController.js')

route.get('/surattugas', function (req, res) {
    surattugasController.getSuratTugas(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/surattugas/:_id', function (req, res) {
    let id = req.params._id;
    surattugasController.getSuratTugasById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/surattugas', function (req, res) {
    let surattugas = req.body;
    surattugasController.createSuratTugas(surattugas, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/surattugas/:_id', function (req, res) {

    surattugasController.deleteSuratTugas(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/surattugas/:_id', function (req, res) {
    let surattugas = req.body;
    surattugasController.updateSuratTugas(req.params._id,surattugas, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;