

let path = require("path");
let express = require("express");
var mongoose = require("mongoose");   //new

let router = express.Router();

router.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});

////////////////////////////////////////////////////
const myDatabase = require('./mongoDatabase');   //new
let db = new myDatabase();

const Student = require('./Student');

router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name);
	return(db.postStudent(obj,res));     //new
});


router.get('/read', function(req, res){
	return(db.getStudent(req.query.identifier,res));   //new
});

module.exports = router;
