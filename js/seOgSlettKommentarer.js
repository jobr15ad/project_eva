/**
 * Created by johanneskrafftbruland on 24.11.2016.
 */

$(document).ready(function(){

    var $lectureTableBody = $("#lectureTableBody")
//Her henter man og får kontakt med serveren. eksempelet fra chrashcourset til books
    $.ajax({
        url:"http://localhost:5000/api/lecture/BINTO1067U_LA_E16",
        method: "GET",
        dataTyper: "json",
        contetType:"application/json",

        success: function(lectures){


            lectures.forEach(function(lecture){

                $lectureTableBody.append(
                    "<tr>" +
                    "<td>" + lecture.description + "</td>" +
                    "<td>" + lecture.type + "</td>" +
                    "<td>" + lecture.startDate + "</td>" +
                    <!-- Sett inn knappen hvor man kan legge igjen en kommentar og rating som lagres automatisk når man trykker på lagre  -->
                    "<td>" +  + "</td>" +
                    "</tr>"
                );
            });
        }
    });


    $("#LogOut").click(function () {
        window.location.href = "login.html";
    });

});


