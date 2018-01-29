var db = require('../db');

module.exports.getAll = function(done){
  db.get().query('Select * from user', function(err, rows){
    if (err) return done(err)
     done(null, rows);
  })
}

module.exports.insertUser = function(userDetails , done){
  console.log("In model" + JSON.stringify(userDetails));
  db.get().query('Insert INTO user set ?', userDetails, function(err, result){
    if(err) return done(err)
    done(null, result);
  })
}

module.exports.findUser = function(userName , done){
  db.get().query('Select * from user where username = ?', userName, function(err, row){
    if(err) return done(err)
    done(null, row);
  })
}

  module.exports.updatePass = function(userDetails, done){
  db.get().query('Update user set password = ? where username = ?' , [userDetails.password ,userDetails.username] , function(err, row){
    if(err) return done(err)
    done(null, row);
  })
}


module.exports.deleteUser = function(userDetails, done){
  console.log(JSON.stringify(userDetails));
  db.get().query('Delete from user where id = ? ' ,[userDetails.id], function(err, row){
    if(err) return done(err)
    done(null, row);
  } )
}
