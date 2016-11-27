/**
 * Created by johanneskrafftbruland on 25.11.2016.
 */
$(document).ready(function(){

    var $lectureTableBody = $("#lectureTableBody")
//Her henter man og får kontakt med serveren. eksempelet fra chrashcourset til books
    $.ajax({
        url:"http://localhost:5000/api/lecture/BALJO1001U_LA_E16",
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
                    "<td><a role='button' href='lagOgSeReview.html' class='btn btn-success btn-lg'> lag review</a></td>" +
                    "</tr>"
                );
            });
        },
    });
});
