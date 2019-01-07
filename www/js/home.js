function logout() {
    window.localStorage.removeItem("loggedIn");
    window.localStorage.removeItem("email");
    window.setTimeout(function () {
        window.location.href("../index.html");
    }, 5000);
}
var welcome = document.getElementById("welcome").innerHTML = "Selamat datang di sini " + window.localStorage.getItem("email");
