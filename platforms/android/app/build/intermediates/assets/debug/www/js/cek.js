
if (window.localStorage.getItem("loggedIn") == 1) {
    window.location.href("/html/home.html");
} else {
    window.location.href("/html/login.html");
}
