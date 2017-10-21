const mongoose=require("mongoose");
//const config=require("./config");
let user = "";
let pass = "";
let url = "localhost";
let port = "27017";
let dbname = "DBPelatihan";
let configdb = "mongodb://"+user+":"+pass+"@"+url+":"+port+"/"+dbname;
mongoose.connect(configdb);

const db=mongoose.connection;

db.on("error",console.error.bind(console,"koneksi error"));
db.once("open",function callback(){
	console.log("koneksi berhasil");	
});
exports.db=db;