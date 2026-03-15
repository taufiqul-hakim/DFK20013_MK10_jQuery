$(document).ready(function () {

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        var username = $("#usr").val();
        var password = $("#psw").val();

        if (username == "" || password == "") {
            $("#popupIsi").popup("open");
        }

        else {
            $.mobile.changePage("#halamanInfo");
        }

    });

});