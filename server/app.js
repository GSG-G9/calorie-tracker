require('dotenv').config({path:'./config.env'})



const serverError = require('./middlewares/errorHandle')


const express = require("express");
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./router')
const app = express();

app.set("port", process.env.PORT || 5000);

const middlewares = [
    compression(),
    cookieParser(),
    express.urlencoded({ extended: false }),
    express.json(),
  ];

  app.use(middlewares);
  app.use('/api/v1/', router);

  router.use(serverError);


module.exports =  app ;
