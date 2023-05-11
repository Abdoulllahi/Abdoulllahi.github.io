function askPassword(ok, fail) {

    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",
    loginOk: function () {
        alert(`${this.name} logged in`);
    },
    loginFail: function () {
        alert(`${this.name} failed to log in`);
    },
};

// When these functions are invoked inside askPassword, the this keyword no longer refers to the user object, causing 
//the error.
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
