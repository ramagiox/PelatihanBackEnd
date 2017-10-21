SuratTugasRinci = require('./surattugasrinciModel.js');

module.exports.getSuratTugasRinci = function(callback,limit){
    SuratTugasRinci.find(callback).limit(limit);
}

module.exports.getSuratTugasRinciById = function(id,callback,limit){
    SuratTugasRinci.findById(id,callback).limit(limit);
}

module.exports.createSuratTugasRinci = function(surattugasrinci,callback){
    SuratTugasRinci.create(surattugasrinci,callback);
}

module.exports.deleteSuratTugasRinci = function(id,callback){
    SuratTugasRinci.findByIdAndRemove(id,callback);
}

module.exports.updateSuratTugasRinci = function(id,surattugasrinci,callback){
    SuratTugasRinci.findByIdAndUpdate(id,surattugasrinci,callback);
}