const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

/**
 *  Database setup
 */
mongoose.connect('mongodb+srv://deploy:uploaddeploy@cluster0-cjk5i.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'))

app.listen(3000);