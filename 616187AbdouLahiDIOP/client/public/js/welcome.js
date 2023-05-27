
function fetchProducts() {
    const token = localStorage.getItem('token');
    const username = getUsernameFromToken(token);

    const welcomeMessage = document.querySelector('#logout-nav p');
    welcomeMessage.textContent = `Welcome, ${username}!`;
    fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error(data.error);
            } else {
                displayProducts(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayProducts(data) {
    const tableBody = document.querySelector('#products tbody');
    tableBody.innerHTML = '';

    for (const product of data.products) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><img src="${product.imageURL}" alt="${product.name}" class="product-image" style="width: 100px; height:100px"></td>
        <td>${product.stock}</td>
        <td><button><img src="../images/cart.png" class="cart" style="width: 100px"></button></td>
      `;
        tableBody.appendChild(row);
    }

    const cartButtons = document.getElementsByClassName('cart');
    for (const button of cartButtons) {
        button.addEventListener('click', () => {
            const productRow = button.closest('tr');
            const productName = productRow.querySelector('td:first-child').textContent;
            const productPrice = parseFloat(productRow.querySelector('td:nth-child(2)').textContent);
            addToCart(productName, productPrice);
        });
    }

}

const cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartTable();
}

function updateCartTable() {
    const cartTableBody = document.querySelector('#cart tbody');
    const totalElement = document.getElementById('total');
    let totalCost = 0;

    cartTableBody.innerHTML = '';

    for (const item of cart) {
        const row = document.createElement('tr');
        const totalPrice = item.price * item.quantity;
        totalCost += totalPrice;

        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
        <button class="quantity-btn minus">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn plus">+</button>
      </td>
        <td>${totalPrice.toFixed(2)}</td>
      `;

        const quantityCell = row.querySelector('.quantity');
        const minusButton = row.querySelector('.minus');
        const plusButton = row.querySelector('.plus');

        minusButton.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantityCell.textContent = item.quantity;
                updateCartTable();
            } else {
                cart.splice(cart.indexOf(item), 1);
                updateCartTable();
            }
        });

        plusButton.addEventListener('click', () => {
            item.quantity++;
            quantityCell.textContent = item.quantity;
            updateCartTable();
        });

        cartTableBody.appendChild(row);

    }

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td colspan="3">Total</td>
      <td>${totalCost}</td>
    `;
    cartTableBody.appendChild(totalRow);

    totalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
    // cartTable.classList.add('has-items');
}


function getUsernameFromToken(token) {
    const decodedToken = token.split('_')[1];
    const username = decodedToken;
    return username;
}

function placeOrder() {

    const orderItems = [];

    for (const item of cart) {
        const { name, price, quantity } = item;
        orderItems.push({ name, price, quantity });
    }

    const order = {
        items: orderItems
    };

    const username = getUsernameFromToken(localStorage.getItem('token'));

    fetch(`http://localhost:3000/products/${username}/cart/place-order`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(order)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                cart.length = 0;
                updateCartTable();
                alert('Order placed successfully!');
            } else {
                alert('Failed to place the order. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function handleLogout() {

    localStorage.removeItem('token');
    window.location.href = 'http://127.0.0.1:3000/client/public/views/login.html';
}

window.addEventListener('load', () => {
    fetchProducts();
});

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', handleLogout);
const placeOrderButton = document.querySelector('.empty');
placeOrderButton.addEventListener('click', placeOrder);