var userModel = require('../models/userModel');
var async = require('async');
var bcrypt = require('bcryptjs');

module.exports.userExist = function(req, res){
  return function(callback){
    userModel.findUser(req.body.username, function(err, result){
    if(err) res.status(500).send("Server Error")
    var userExist = null;
    if(result.length>0){
          userExist = true;
          callback(null, userExist, req, res);
  }
    else { userExist = false ; callback(null, userExist, req,res)}

  })
}
}

module.exports.insertUser = function(userExist, req, res, callback){
if(!userExist){
  bcrypt.genSalt(10, function(err, salt){
          req.body.salt = salt;
          bcrypt.hash(req.body.password.toString(), salt, function (err, hash) {
              req.body.password = hash;
              userModel.insertUser(req.body, function(err, result){
              if(err) res.status(500).send("Server Error")
              callback(null, result);
              })
              });
          });
}
else {
    res.status(200).send("User Already Exist");
}
}
