let mong = require('mongoose');

let pegawai = mong.Schema({
	KdPegawai: String,
	NamaPegawai: String,
	AlamatPegawai: String,
	KdProvinsi: String,
	KdKota: String,
	KdKec: String,
	TglLahir : Date,
	KdStatusPegawai : String,
	KdTipePegawai : String,
	CreatedBy : String,
	CreatedDate : Date,
	ModifiedBy : String,
	ModifiedDate : Date
});

let Pegawai = module.exports = mong.model("Pegawai", pegawai, "Pegawai");