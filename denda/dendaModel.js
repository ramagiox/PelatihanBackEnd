let mong = require('mongoose');

let denda = mong.Schema({
	KdDenda : String,
	KdDataSewa : String,
	KdBarang : String,
	JumlahDenda : Number,
	StatusDenda : String
});

let Denda = module.exports = mong.model("Denda", denda, "Denda");