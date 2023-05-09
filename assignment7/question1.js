function askPassword(ok, fail) {
    
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",
    loginOk: function() {
        alert(`${this.name} logged in`);
    },
    loginFail: function() {
        alert(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk(), user.loginFail());