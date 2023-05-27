// login.js

// Function to handle login
function login() {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Send a POST request to the login endpoint
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // Store the token in local storage
                localStorage.setItem('token', data.token);
                // Redirect to the welcome page
                window.location.href = 'http://127.0.0.1:3000/client/public/views/welcome.html';
            } else {
                // Display an error message
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Add event listener to the login button
document.getElementById('login-btn').addEventListener('click', login);
