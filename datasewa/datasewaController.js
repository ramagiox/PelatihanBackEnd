DataSewa = require('./datasewaModel.js');

module.exports.getDataSewa = function(callback,limit){
    DataSewa.find(callback).limit(limit);
}

module.exports.getDataSewaById = function(id,callback,limit){
    DataSewa.findById(id,callback).limit(limit);
}

module.exports.createDataSewa = function(datasewa,callback){
    DataSewa.create(datasewa,callback);
}

module.exports.deleteDataSewa = function(id,callback){
    DataSewa.findByIdAndRemove(id,callback);
}

module.exports.updateDataSewa = function(id,datasewa,callback){
    DataSewa.findByIdAndUpdate(id,datasewa,callback);
}