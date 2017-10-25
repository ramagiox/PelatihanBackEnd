let ex = require('express');
let route = ex.Router();
let pembayaranController = require('./pembayaranController.js')

route.get('/pembayaran', function (req, res) {
    pembayaranController.getPembayaran(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/pembayaran/:_id', function (req, res) {
    let id = req.params._id;
    pembayaranController.getPembayaranById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pembayaran', function (req, res) {
    let pembayaran = req.body;
    pembayaranController.createPembayaran(pembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pembayaran/:_id', function (req, res) {

    pembayaranController.deletePembayaran(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pembayaran/:_id', function (req, res) {
    let pembayaran = req.body;
    pembayaranController.updatePembayaran(req.params._id,pembayaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;