let ex = require('express');
let route = ex.Router();
let dendaController = require('./dendaController.js')

route.get('/denda', function (req, res) {
    dendaController.getDenda(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/denda/:_id', function (req, res) {
    let id = req.params._id;
    dendaController.getDendaById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/denda', function (req, res) {
    let denda = req.body;
    dendaController.createDenda(denda, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/denda/:_id', function (req, res) {

    dendaController.deleteDenda(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/denda/:_id', function (req, res) {
    let denda = req.body;
    dendaController.updateDenda(req.params._id,denda, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;