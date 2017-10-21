SuratTugas = require('./surattugasModel.js');

module.exports.getSuratTugas = function(callback,limit){
    SuratTugas.find(callback).limit(limit);
}

module.exports.getSuratTugasById = function(id,callback,limit){
    SuratTugas.findById(id,callback).limit(limit);
}

module.exports.createSuratTugas = function(surattugas,callback){
    SuratTugas.create(surattugas,callback);
}

module.exports.deleteSuratTugas = function(id,callback){
    SuratTugas.findByIdAndRemove(id,callback);
}

module.exports.updateSuratTugas = function(id,surattugas,callback){
    SuratTugas.findByIdAndUpdate(id,surattugas,callback);
}