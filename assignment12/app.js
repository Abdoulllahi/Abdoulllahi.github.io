const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routers
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'assets', 'views',  'index.html'));
});


// Use userRouter for /users
app.use('/users', userRouter);

// Use productRouter for /products
app.use('/products', productRouter);

// Customize 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'assets', 'views', '404.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
