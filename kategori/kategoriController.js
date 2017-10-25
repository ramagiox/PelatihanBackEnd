Kategori = require('./kategoriModel.js');

module.exports.getKategori = function(callback,limit){
    Kategori.find(callback).limit(limit);
}

module.exports.getKategoriById = function(id,callback,limit){
    Kategori.findById(id,callback).limit(limit);
}

module.exports.createKategori = function(kategori,callback){
    Kategori.create(kategori,callback);
}

module.exports.deleteKategori = function(id,callback){
    Kategori.findByIdAndRemove(id,callback);
}

module.exports.updateKategori = function(id,kategori,callback){
    Kategori.findByIdAndUpdate(id,kategori,callback);
}