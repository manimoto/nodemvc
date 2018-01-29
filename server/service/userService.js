var userModel = require('../models/userModel');
var async = require('async');
var hashService =  require('./pwdhash');

module.exports.userExist = function(req, res){
  return function(callback){
    userModel.findUser(req.body.username, function(err, result){
    if(err) res.status(500).send("Server Error")
    var userExist = null;
    if(result.length>0){
          userExist = result;
          callback(null, userExist, req, res);
  }
    else { userExist = false ; callback(null, userExist, req,res)}
  })
}
}

module.exports.insertUser = function(userExist, req, res, callback){
if(!userExist){
  async.waterfall([hashService.genSalt(req,res), hashService.hash],function(err, result){
    if(err) res.status(500).send("Server Error")
    userModel.insertUser(result.body, function(err, result){
    if(err) res.status(500).send("Server Error")
    callback(null, result);
    })
  });
}
else {
    res.status(200).send("User Already Exist");
}
}


module.exports.validUser = function(userExist, req, res, callback){
      var valid = null;
      if(!userExist){
        res.status(200).send("User Not Registered With us !");
      }
      else{
            hashService.hash(userExist[0].salt, req, res, function(err, req){
              if(userExist[0].password === req.body.password){
                 valid = userExist[0];
                callback(null, valid, req, res);
              }
              else {
                valid = false;
                callback(null, valid, req, res);
              }
            })
      }
}


module.exports.changePass = function(valid, req, res, callback){
        if(!valid){
          res.status(200).send("Incorrect Password");
        }
        else{
            req.body.password = req.body.newPassword;
            hashService.hash(req.body.salt, req, res, function(err, result){
              if(err) res.status(500).send("Server Hash change Error");
              userModel.updatePass(result.body, function(err, result){
              if(err) res.status(500).send("Server Update Error");
              callback(null, result);
              })
        });
      }
}


module.exports.deleteUser = function(valid, req, res, callback){
  if(!valid){
    res.status(200).send("Incorrect Password");
  }
  else{
    userModel.deleteUser(valid, function(err, result){
    if(err) res.status(500).send("Server Update Error");
    callback(null, result);
    })
  }
}
