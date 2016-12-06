/**
 * Created by johanneskrafftbruland on 25.11.2016.
 */


//Tabell som vieser og henter reviews og knapp for å kunne slette alle kommentarer
$(document).ready(function () {
    var id = location.hash.replace('#', '');

    $.ajax({
        url: "http://localhost:5000/api/review/" + id,
        method: "GET",
        dataType: "json",
        //contentType: "application/json",

        success: function (reviews) {
            var $ReviewsTable = $("#ReviewsTable");

                reviews.forEach(function (review) {
                    var btn;

                    //Skal sette ut en knapp som sletter reviewet..
                    btn = "<button class ='btn-success toDelete btn-lg' data-user=" + review.userId + " data-id= " + review.id + "> Slett</button>"

                $ReviewsTable.append(
                    "<tr>" +
                    "<td>" + review.comment + "</td>" +
                    "<td>" + review.rating + "</td>" +
                    "<td>"+ btn + "</td>" +
                    "</tr>"
                );
            });
        },
    });

    //funksjon for å slette et review
    $("#ReviewsTable").on('click','.toDelete',function(e){
      var id = $(this).data("id");
      var userId = $(this).data("user");

        $.ajax({
            type: "DELETE",
            url: SDK.serverURL + "/student/review",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                id: id,
                userId: userId
            }),
            success: function(res){
                location.reload()
            },
            error: function(err) {
                console.log(err);
            }
        })
    });


    //Logg ut funksjon
    $(document).ready(function () {

        $("#LogOut").click(function () {
            window.location.href = "login.html";
        });
    });

});
