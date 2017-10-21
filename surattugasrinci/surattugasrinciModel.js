let mong = require('mongoose');

let surattugasrinci = mong.Schema({
	NoSuratTugas : String,
	KdPeserta : String,
	KdStatusPeserta : String,
	NL : Number,
	JT : Number,
	Aritmatika : Number,
	CreatedBy : String,
	CreatedDate : Date,
	ModifiedBy : String,
	ModifiedDate : Date
});

let SuratTugasRinci = module.exports = mong.model("SuratTugasRinci", surattugasrinci, "SuratTugasRinci");