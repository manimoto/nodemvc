var userModel =  require('../models/userModel');
var userService = require('../service/userService');
var async = require('async');
module.exports = function(app){

app.get('/users', function(req, res){
    userModel.getAll(function(err, result){
      if(err) res.status(500).send("Server Error")
      res.status(200).send(result);
    })
  });


app.post('/register', function(req, res){
  async.waterfall([userService.userExist(req,res), userService.insertUser],function(err, result){
    if(err) res.status(500).send("Server Error")
    res.status(200).send("User Successfully Registered");
  });
})


app.put('/updatePass' , function(req, res){
  userModel.findUser("manish", function(err, result){
    if(err) res.status(500).send("Server Error")
    res.status(200).send(result);
  })
})


app.delete('/deleteUser' , function(req, res){
  userModel.findUser("manish", function(err, result){
    if(err) res.status(500).send("Server Error")
    res.status(200).send(result);
  })
})



}
