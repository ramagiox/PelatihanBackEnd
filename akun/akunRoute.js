let ex = require('express');
let route = ex.Router();
let akunController = require('./akunController.js')

route.get('/akun', function (req, res) {
    akunController.getAkun(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/akun/:_id', function (req, res) {
    let id = req.params._id;
    akunController.getAkunById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/akun', function (req, res) {
    let akun = req.body;
    akunController.createAkun(akun, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/akun/:_id', function (req, res) {

    akunController.deleteAkun(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/akun/:_id', function (req, res) {
    let akun = req.body;
    akunController.updateAkun(req.params._id,akun, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;