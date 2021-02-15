//var mongoose = require('mongoose');

//var Schema = mongoose.Schema;
module.exports = (sequelize, Sequelize) => {
const Book = sequelize.define("book", {
    title: {type: Sequelize.STRING},
    author: { type: Sequelize.STRING, ref: 'Author', required: true },
    summary: {type: Sequelize.STRING},
    isbn: {type: Sequelize.STRING},
    genre: [{ type: Sequelize.STRING, ref: 'Genre' }]
});

// Virtual for this book instance URL.
/*BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/'+this._id;
});*/
}
// Export model.
//module.exports = mongoose.model('Book', BookSchema);
