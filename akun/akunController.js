Akun = require('./akunModel.js');

module.exports.getAkun = function(callback,limit){
    Akun.find(callback).limit(limit);
}

module.exports.getAkunById = function(id,callback,limit){
    Akun.findById(id,callback).limit(limit);
}

module.exports.createAkun = function(akun,callback){
    Akun.create(akun,callback);
}

module.exports.deleteAkun = function(id,callback){
    Akun.findByIdAndRemove(id,callback);
}

module.exports.updateAkun = function(id,akun,callback){
    Akun.findByIdAndUpdate(id,akun,callback);
}