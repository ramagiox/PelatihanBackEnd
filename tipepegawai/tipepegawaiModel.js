let mong = require('mongoose');

let tipepegawai = mong.Schema({
	KdTipePegawai : String,
	NamaTipePegawai : String,
	CreatedBy : String,
	CreatedDate : Date,
	ModifiedBy : String,
	ModifiedDate : Date
});

let TipePegawai = module.exports = mong.model("TipePegawai", tipepegawai, "TipePegawai");