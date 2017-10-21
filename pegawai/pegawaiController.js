Pegawai = require('./pegawaiModel.js');

module.exports.getPegawai = function(callback,limit){
    Pegawai.find(callback).limit(limit);
}

module.exports.getPegawaiById = function(id,callback,limit){
    Pegawai.findById(id,callback).limit(limit);
}

module.exports.createPegawai = function(pegawai,callback){
    Pegawai.create(pegawai,callback);
}

module.exports.deletePegawai = function(id,callback){
    Pegawai.findByIdAndRemove(id,callback);
}

module.exports.updatePegawai = function(id,pegawai,callback){
    Pegawai.findByIdAndUpdate(id,pegawai,callback);
}