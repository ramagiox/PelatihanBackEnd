TipePegawai = require('./tipepegawaiModel.js');

module.exports.getTipePegawai = function(callback,limit){
    TipePegawai.find(callback).limit(limit);
}

module.exports.getTipePegawaiById = function(id,callback,limit){
    TipePegawai.findById(id,callback).limit(limit);
}

module.exports.createTipePegawai = function(tipepegawai,callback){
    TipePegawai.create(tipepegawai,callback);
}

module.exports.deleteTipePegawai = function(id,callback){
    TipePegawai.findByIdAndRemove(id,callback);
}

module.exports.updateTipePegawai = function(id,tipepegawai,callback){
    TipePegawai.findByIdAndUpdate(id,tipepegawai,callback);
}