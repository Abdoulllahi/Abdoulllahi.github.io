/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-23 21:45:57
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 15:22:47
 * @ Description:
 */

let Product = require('../models/product');

let controller = {
    getById: function (req, res, next) {

        let data = Product.getById(req.params.id);
        console.log(data);
        if (data != undefined)
            res.status(200).json(data)
        else
            res.status(404).json({ message: "didnt find" });
    },

    getAll: function (req, res, next) {

        const user = req.user;
        let arr = {
            products: Product.getAll(),
            shoppingCart: user.shoppingCart,
        };
        res.json(arr);
    },

    save: function (req, res, next) {
        let product = new Product(null, req.body.name, req.body.price, req.body.imageURL, req.body.stock);
        product.save;
        res.json(product);
    },

    edit() {
        const index = db.findIndex((product) => product.productId == this.productId);
        db.splice(index, 1, this);
        return this;
    },

    deleteById: function (req, res, next) {
        let data = Product.delete(req.params.id);
        if (data != undefined)
            res.status(200).json(data)
        else
            res.status(404).json({ message: "didnt find" });
    }
}

module.exports = controller;