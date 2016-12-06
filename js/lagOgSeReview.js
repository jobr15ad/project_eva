/**
 * Created by johanneskrafftbruland on 25.11.2016.
 */


//Tabell som vieser og henter reviews
$(document).ready(function () {
    var id = location.hash.replace('#', '');

$.ajax({
    url: "http://localhost:5000/api/review/"+id,
    method: "GET",
    dataType: "json",

    success: function (reviews) {
        var $studentReviewsTable = $("#studentReviewsTable");

        reviews.forEach(function (review) {
            var btn;

            //skiller mellom om det er "ditt review" eller en annen bruler sitt.
            if (review.userId == window.localStorage.getItem("storeSDKuserId"))   {
                btn = "<button class =' btn-success toDelete btn-lg' data-id= " + review.id + "> Slett</button>"
            } else {
                btn = "<button class ='btn-danger btn-lg' " + review.id + "> Ikke ditt review</button>"
            }

            // Tabellen som viser frem alle reviews til den lecturen.
            $studentReviewsTable.append(
                "<tr>" +
                "<td>" + review.comment + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + btn + "</td>" +
                "</tr>"
            );
        });
    },
});


//funksjon for å lage og lagre et review
    $("#insertReview").click(function (e) {
        e.preventDefault()
        var comment = $("#comment").val();
        var rating = $("#rating").val();
        var lecture = location.hash.replace('#', '');

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/student/review",
            contentType: "application/json",
            data: JSON.stringify({
                comment: comment,
                rating: rating,
                lectureId: lecture,
                userId: window.localStorage.getItem("storeSDKuserId")
            }),
            success: function (res) {
                location.reload()
            },
            error: function (err) {
                console.log(err);
            }
        })
    })




    //funksjon for å slette et review
    $("#studentReviewsTable").on('click','.toDelete',function(e){
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: SDK.serverURL + "/student/review",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                id: id,
                userId: window.localStorage.getItem("storeSDKuserId")
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