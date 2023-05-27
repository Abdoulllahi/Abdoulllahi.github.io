const User = require('../models/user');
const Product = require('../models/product');

const controller = {
    getAll: function (req, res) {
        res.json(User.getAll());
    },

    getByUsername: function (req, res) {
        const username = req.params.username;
        const user = User.getByUsername(username);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    },

    save: function (req, res) {
        const { id, username, password, shoppingCart } = req.body;
        const user = new User(id, username, password, shoppingCart);
        user.save();
        res.json(user);
    },

    addProductToCart: function (req, res) {
        const username = req.params.username;
        const { productId, quantity } = req.body;

        const user = User.getByUsername(username);
        const product = Product.getById(productId);

        if (!user || !product) {
            res.status(404).json({ message: 'User or product not found' });
            return;
        }

        const result = user.addProduct(product, quantity);

        if (typeof result === 'string') {
            res.status(400).json({ message: result });
        } else {
            res.json(result);
        }
    },

    removeProductFromCart: function (req, res) {
        const username = req.params.username;
        const productId = req.body.productId;

        const user = User.getByUsername(username);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const result = user.removeProduct(productId);

        res.json(result);
    },

    updateProductQuantity: function (req, res) {
        const username = req.params.username;
        const { productId, quantity } = req.body;

        const user = User.getByUsername(username);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const result = user.updateQuantity(productId, quantity);

        if (typeof result === 'string') {
            res.status(400).json({ message: result });
        } else {
            res.json(result);
        }
    },

    placeOrder: function (req, res) {
        const username = req.params.username;

        const user = User.getByUsername(username);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const result = user.placeOrder();

        if (typeof result === 'string') {
            res.status(400).json({ message: result });
        } else {
            // Deduct the user's order from the server-side product stock
            for (const productId in user.shoppingCart) {
                const product = Product.getById(productId);
                const quantity = user.shoppingCart[productId].quantity;
                product.stock -= quantity;
            }

            res.json(result);
        }
    }
};

module.exports = controller;
