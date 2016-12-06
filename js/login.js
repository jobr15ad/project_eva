/**
 * Created by johanneskrafftbruland on 17.11.2016.
 */

//funksjon for å validere brukernavnet og passordet (og om student eller admin) til den som prøver å logge inn
$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var pw = $("#inputPassword").val();

        SDK.login(email, pw, function(err, data){

            //error hvis man skriver inn feil verdier.
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //Login ok.
            $("#loginForm").find(".form-group").addClass("has-success");

            //if else statement for å skille mellom admin eller student
            if (data.type === "admin")
                window.location.href = "hjemAdmin.html";

            else if (data.type === "student") {
                window.location.href = "hjemStudent.html";
            }
            else {
                window.alert("Feil verdier")
            }

        });
    });
});