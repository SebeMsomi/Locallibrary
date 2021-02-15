  var async = require('async');
  const { body,validationResult } = require('express-validator');
  const Sequelize = require('sequelize');
  const moment =require('moment');

  var models = require( '../Sequelize-CLI/models/');
  var Author = models.Author;
  var Book = models.Book;

  // Display list of all Authors. -
  exports.author_list = function(req, res, next) {
    Author.findAll().then(function(author_list){
      res.render('author_list',{
        title:'Author List',
        author_list:author_list,
      });
    });
  };

  // Display detail page for a specific Author. -
  exports.author_detail = function(req, res, next) {
    async.parallel({
      author: function(callback) {
        Author.findByPk(req.params.id).then(function(value) {callback(null, value);},function(err){callback(err);});
      },

      author_books: function(callback){
        // Book.findOne({where:{author: req.params.id }},'title summary').then(function(value){callback(null,value);},function(err){callback(err)})
        Book.findByPk(req.params.id).then(function(value){callback(null,value);},function(err){callback(err)});
      }
    },
    function(err, results) {

          if (err) { return next(err); } // Error in API usage.
          if (results.author==null) { // No results.
            var err = new Error('Author not found');
            err.status = 404;
            return next(err);
          }

          // Successful, so render.
          res.render('author_detail', {author: results.author, authors_books: results.author_books });
        });
  };

