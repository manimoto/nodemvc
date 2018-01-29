var bcrypt = require('bcryptjs');

module.exports.genSalt =function(req, res){
  return function(callback){
  bcrypt.genSalt(10, function(err, salt){
    if(err) res.status(500).send("Server Error In salt Generation");
    callback(null, salt, req, res);
  });
}
}

module.exports.hash =  function(salt ,req, res, callback){
  req.body.salt = salt;
  bcrypt.hash(req.body.password.toString(), salt, function (err, hash) {
      if(err) res.status(500).send("Server Error In hash Generation");
      req.body.password = hash;
      callback(null, req);
});
}
