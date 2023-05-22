const Book = require('../models/book');

exports.save = (request, response, next) => {
    const savedBook = new Book(null, request.body.title, request.body.isbn, request.body.publishedDate, request.body.author)
        .save();
    response.status(201).json(savedBook);
}

exports.getAll = (request, response, next) => {
    response.status(200).json(Book.getAll());
}

exports.deleteById = (request, response, next) => {
    response.json(Book.deleteById(req.params.productId));
}

exports.edit = (request, response) => {
    const editedProd = new Book(request.params.productId, request.body.title, request.body.description,
        request.body.price)
        .edit();
    response.json(editedProd);
}