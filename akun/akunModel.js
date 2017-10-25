let mong = require('mongoose');

let akun = mong.Schema({
	UserName: String,
	Password : String,
	HakAkses: String,
});

let Akun = module.exports = mong.model("Akun", akun, "Akun");