function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin" && password == "admin") {
        var status = (document.getElementById("status").innerHTML =
            "Sukses login " + window.location.href);
        window.localStorage.setItem("loggedIn", 1);
        window.localStorage.setItem("email", email);
        window.setTimeout(function () {
            window.location.href("/html/home.html");
        }, 5000);
    } else if (email == "" && password == "") {
        var status = (document.getElementById("status").innerHTML =
            "Harap isi email dan password");
        window.setTimeout(function () {
            var status = (document.getElementById("status").innerHTML =
                "");
        }, 3000);
    } else {
        var status = (document.getElementById("status").innerHTML =
            "Gagal login. Harap cek email dan password");
        window.setTimeout(function () {
            var status = (document.getElementById("status").innerHTML =
            "");
        }, 3000);
    }
}