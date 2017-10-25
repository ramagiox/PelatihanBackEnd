let ex = require('express');
let route = ex.Router();
let kategoriController = require('./kategoriController.js')

route.get('/kategori', function (req, res) {
    kategoriController.getKategori(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/kategori/:_id', function (req, res) {
    let id = req.params._id;
    kategoriController.getKategoriById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/kategori', function (req, res) {
    let kategori = req.body;
    kategoriController.createKategori(kategori, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/kategori/:_id', function (req, res) {

    kategoriController.deleteKategori(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/kategori/:_id', function (req, res) {
    let kategori = req.body;
    kategoriController.updateKategori(req.params._id,kategori, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;