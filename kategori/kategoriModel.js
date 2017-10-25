let mong = require('mongoose');

let kategori = mong.Schema({
	KdKategori : String,
	NamaKategori : String
});

let Kategori = module.exports = mong.model("Kategori", kategori, "Kategori");