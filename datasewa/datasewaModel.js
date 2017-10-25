let mong = require('mongoose');

let datasewa = mong.Schema({
	KdDataSewa : String,
	KdPegawai : String,
	KdPenyewa : String,
	KdBarang : String,
	StatusDataSewa : String,
	TglMulai : Date,
	TglSelesai : Date
});

let DataSewa = module.exports = mong.model("DataSewa", datasewa, "DataSewa");