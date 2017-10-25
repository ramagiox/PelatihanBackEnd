Penyewa = require('./penyewaModel.js');

module.exports.getPenyewa = function(callback,limit){
    Penyewa.find(callback).limit(limit);
}

module.exports.getPenyewaById = function(id,callback,limit){
    Penyewa.findById(id,callback).limit(limit);
}

module.exports.createPenyewa = function(penyewa,callback){
    Penyewa.create(penyewa,callback);
}

module.exports.deletePenyewa = function(id,callback){
    Penyewa.findByIdAndRemove(id,callback);
}

module.exports.updatePenyewa = function(id,penyewa,callback){
    Penyewa.findByIdAndUpdate(id,penyewa,callback);
}