/**
 * Created by johanneskrafftbruland on 24.11.2016.
 */
//Logg ut funksjon
$(document).ready(function () {

    $("studentLogOut").on("click", function () {
        SDK.logOut();
        window.location.href = "login.html";
    });
});