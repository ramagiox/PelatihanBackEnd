let ex = require('express');
let route = ex.Router();
let penyewaController = require('./penyewaController.js')

route.get('/penyewa', function (req, res) {
    penyewaController.getPenyewa(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penyewa/:_id', function (req, res) {
    let id = req.params._id;
    penyewaController.getPenyewaById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penyewa', function (req, res) {
    let penyewa = req.body;
    penyewaController.createPenyewa(penyewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penyewa/:_id', function (req, res) {

    penyewaController.deletePenyewa(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penyewa/:_id', function (req, res) {
    let penyewa = req.body;
    penyewaController.updatePenyewa(req.params._id,penyewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;