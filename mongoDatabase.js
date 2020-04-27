

var express = require("express");
var mongoose = require("mongoose");
var Info = require("./models/Info");
const Student = require('./Student');

let myDatabase = function() {
}

myDatabase.prototype.getStudent = function(ident,res) {

  Info.find({ident:ident},function(error,info) {
      if (error) {
          return res.json({retVal:null});
      }
      else if (info == null) {
          return res.json({retVal:null});
      }

      if (info.length == 1)	
        return res.json({ retVal: new Student(ident,info[0].name) });
      else
          return res.json({retVal:null});
   });
}

myDatabase.prototype.postStudent = function(student,res) {
  let obj = {ident:student.ident,name:student.name};
  Info.create(obj,function(error,info) {
      if (error) {
          return res.json({retVal:false});
      }
      return res.json({retVal:obj});
  });
}

module.exports = myDatabase;