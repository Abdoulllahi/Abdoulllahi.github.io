/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-23 20:53:34
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 23:18:17
 * @ Description:
 */

const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];

class User {
    constructor(id, username, password, shoppingCart = {}) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.shoppingCart = shoppingCart;
    }

    save() {
        this.id = ++counter;
        users.push(this);
        return this;
    }

    addProduct(product, quantity = 1) {
        if (this.shoppingCart.hasOwnProperty(product.productId)) {
            const existingProduct = this.shoppingCart[product.productId];
            const newQuantity = existingProduct.quantity + quantity;
            if (newQuantity > product.stock) {
                return "Insufficient stock";
            }
            existingProduct.quantity = newQuantity;
        } else {
            if (quantity > product.stock) {
                return "Insufficient stock";
            }
            this.shoppingCart[product.productId] = {
                product: product,
                quantity: quantity,
            };
        }
        this.updateTotalPrice();
        return this.shoppingCart;
    }

    removeProduct(productId) {
        delete this.shoppingCart[productId];
        this.updateTotalPrice();
        return this.shoppingCart;
    }

    updateQuantity(productId, quantity) {
        const product = this.shoppingCart[productId];
        if (!product) {
            return "Product not found in the shopping cart";
        }
        if (quantity === 0) {
            return this.removeProduct(productId);
        }
        if (quantity < 1 || quantity > product.product.stock) {
            return "Invalid quantity";
        }
        product.quantity = quantity;
        this.updateTotalPrice();
        return this.shoppingCart;
    }

    updateTotalPrice() {
        let totalPrice = 0;
        for (const productId in this.shoppingCart) {
            const product = this.shoppingCart[productId].product;
            const quantity = this.shoppingCart[productId].quantity;
            totalPrice += product.price * quantity;
        }
        this.totalPrice = totalPrice;
    }

    placeOrder() {
        for (const productId in this.shoppingCart) {
            const product = this.shoppingCart[productId].product;
            const quantity = this.shoppingCart[productId].quantity;
            if (quantity > product.stock) {
                return "Order quantity exceeds available stock";
            }
            product.stock -= quantity;
        }
        this.shoppingCart = {};
        this.updateTotalPrice();
        return "Order placed successfully";
    }

    static getByUsername(username) {
        return users.find(user => user.username === username);
    }
}

module.exports = User;
