Barang = require('./barangModel.js');

module.exports.getBarang = function(callback,limit){
    Barang.find(callback).limit(limit);
}

module.exports.getBarangById = function(id,callback,limit){
    Barang.findById(id,callback).limit(limit);
}

module.exports.createBarang = function(barang,callback){
    Barang.create(barang,callback);
}

module.exports.deleteBarang = function(id,callback){
    Barang.findByIdAndRemove(id,callback);
}

module.exports.updateBarang = function(id,barang,callback){
    Barang.findByIdAndUpdate(id,barang,callback);
}