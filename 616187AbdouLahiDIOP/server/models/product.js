/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-23 18:24:04
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 18:36:13
 * @ Description:
 */
let products = [
    {
        productId: 1,
        name: "Smartphone",
        price: 599.99,
        imageURL: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2118&q=80",
        stock: 10
    },
    {
        productId: 2,
        name: "Laptop",
        price: 1299.99,
        imageURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        stock: 5
    },
    {
        productId: 3,
        name: "Headphones",
        price: 99.99,
        imageURL: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        stock: 20
    },
    {
        productId: 4,
        name: "Smart TV",
        price: 899.99,
        imageURL: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        stock: 8
    },
    {
        productId: 5,
        name: "Watch",
        price: 49.99,
        imageURL: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
        stock: 15
    },
    {
        productId: 6,
        name: "Bluetooth Speaker",
        price: 79.99,
        imageURL: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        stock: 12
    },
    {
        productId: 7,
        name: "Digital Camera",
        price: 399.99,
        imageURL: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        stock: 6
    },
    {
        productId: 8,
        name: "VR Headset",
        price: 69.99,
        imageURL: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        stock: 18
    },
    {
        productId: 9,
        name: "Gaming Console",
        price: 499.99,
        imageURL: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
        stock: 3
    },
    {
        productId: 10,
        name: "External Hard Drive",
        price: 119.99,
        imageURL: "https://images.unsplash.com/photo-1581725645226-92ad3b4c16d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        stock: 9
    }
]
let counter = 0;

class Product {
    constructor(productId, name, price, imageURL, stock) {

        this.productId = productId;
        this.name = name;
        this.price = price;
        this.imageURL = imageURL;
        this.stock = stock;
    }

    save() {

        this.id = ++counter;
        products.push(this);
        return this;
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(product => product.productId == id)
    }

    static delete(id) {

        let product = products.find(product => product.productId == id);
        products = products.filter(product => product.productId != id);
        return product;
    }
}


module.exports = Product;