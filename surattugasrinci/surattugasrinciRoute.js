let ex = require('express');
let route = ex.Router();
let surattugasrinciController = require('./surattugasrinciController.js')

route.get('/surattugasrinci', function (req, res) {
    surattugasrinciController.getSuratTugasRinci(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/surattugasrinci/:_id', function (req, res) {
    let id = req.params._id;
    surattugasrinciController.getSuratTugasRinciById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/surattugasrinci', function (req, res) {
    let surattugasrinci = req.body;
    surattugasrinciController.createSuratTugasRinci(surattugasrinci, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/surattugasrinci/:_id', function (req, res) {

    surattugasrinciController.deleteSuratTugasRinci(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/surattugasrinci/:_id', function (req, res) {
    let surattugasrinci = req.body;
    surattugasrinciController.updateSuratTugasRinci(req.params._id,surattugasrinci, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;