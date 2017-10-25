let mong = require('mongoose');

let pegawai = mong.Schema({
	KdPegawai: String,
	NamaPegawai: String,
	AlamatPegawai: String,
	NoTelp : String
});

let Pegawai = module.exports = mong.model("Pegawai", pegawai, "Pegawai");