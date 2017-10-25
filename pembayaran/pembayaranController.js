Pembayaran = require('./pembayaranModel.js');

module.exports.getPembayaran = function(callback,limit){
    Pembayaran.find(callback).limit(limit);
}

module.exports.getPembayaranById = function(id,callback,limit){
    Pembayaran.findById(id,callback).limit(limit);
}

module.exports.createPembayaran = function(pembayaran,callback){
    Pembayaran.create(pembayaran,callback);
}

module.exports.deletePembayaran = function(id,callback){
    Pembayaran.findByIdAndRemove(id,callback);
}

module.exports.updatePembayaran = function(id,pembayaran,callback){
    Pembayaran.findByIdAndUpdate(id,pembayaran,callback);
}