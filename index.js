document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault(); // page reload stop

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(user === "" || pass === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
    }
    else if(user === "abhaysingh" && pass === "@1234") {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    }
    else {
        message.style.color = "red";
        message.innerText = "Invalid Username or Password!";
    }

});