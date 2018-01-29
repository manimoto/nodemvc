var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./server/db');
    app = express();
//express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//Routes
require('./server/routes')(app);

//Start server
db.connect(function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  } else {
    app.listen(8000, function() {
      console.log('Listening on port 8000...')
    })
  }
})
