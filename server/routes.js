var express = require('express');
var apiRouter = express.Router();
module.exports = function (app) {

    app.use(express.json());
    app.use(express.urlencoded());

    app.use('/api' , apiRouter);
    require('./controllers/users')(apiRouter);

}
