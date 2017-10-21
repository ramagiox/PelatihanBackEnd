let mong = require('mongoose');

let surattugas = mong.Schema({
	NoSuratTugas : String,
	KeteranganSurat : String,
	KdAngkatan : String,
	KdPegawai : String,
	CreatedBy : String,
	CreatedDate : Date,
	ModifiedBy : String,
	ModifiedDate : Date
});

let SuratTugas = module.exports = mong.model("SuratTugas", surattugas, "SuratTugas");