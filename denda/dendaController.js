denda = require('./dendaModel.js');

module.exports.getDenda = function(callback,limit){
    denda.find(callback).limit(limit);
}

module.exports.getDendaById = function(id,callback,limit){
    denda.findById(id,callback).limit(limit);
}

module.exports.createDenda = function(denda,callback){
    denda.create(denda,callback);
}

module.exports.deleteDenda = function(id,callback){
    denda.findByIdAndRemove(id,callback);
}

module.exports.updateDenda = function(id,denda,callback){
    denda.findByIdAndUpdate(id,denda,callback);
}