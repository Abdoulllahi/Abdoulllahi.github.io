/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-23 18:10:40
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-26 23:18:05
 * @ Description:
 */


const express = require('express');
const cors = require('cors');
const productRouter = require('./routers/productRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];

const activeSessions = {};
app.use('/products', authenticate, productRouter);

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Generate session token with current datetime and username
        const token = `${Date.now()}_${username}`;
        activeSessions[token] = user;
        res.json({ token, shoppingCart: user.shoppingCart });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (token && activeSessions[token]) {
        req.user = activeSessions[token];
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// Logout route
app.post('/logout', authenticate, (req, res) => {
    const token = req.headers.authorization;
    delete activeSessions[token];
    res.json({ message: 'Logout successful' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started, listening on port: ${PORT}`)
});
