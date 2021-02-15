/*const { body,validationResult } = require('express-validator');
const {Model} = require('sequelize');

var Book = require('../sequelize/book');
var Author = require('../sequelize/author');


var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
       
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};


// Display list of all books.
exports.book_list = function(req, res, next) {

  Book.find({}, 'title author')
    .populate('author')
    .exec(function (err, list_books) {
        console.log('title author');
      if (err) { return next(err); }
      //Successful, so render
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });
    
};*/