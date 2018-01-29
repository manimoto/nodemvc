var mysql = require('mysql');
var state = {
  pool: null
}

exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'crud',
    password: 'crud',
    database: 'crud'
  })
  done()
}

exports.get = function() {
  return state.pool
}
