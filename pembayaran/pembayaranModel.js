let mong = require('mongoose');

let pembayaran = mong.Schema({
	KdPembayaran: String,
	KdPenyewa : String,
	KdDataSewa: String,
	StatusPembayaran: String,
	HargaTotal: Number,
	TglPembayaran: Date
});

let Pembayaran = module.exports = mong.model("Pembayaran", pembayaran, "Pembayaran");