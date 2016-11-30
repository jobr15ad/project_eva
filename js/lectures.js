/**
 * Created by johanneskrafftbruland on 25.11.2016.
 */

$(document).ready(function(){

    var course = location.hash;
    var course = course.replace('#', '');

    var $coursesTable = $("#coursesTable")
    var code = JSON.parse(localStorage.getItem("lectureCode"));

//Her henter man og får kontakt med serveren. eksempelet fra chrashcourset til books

    $.ajax({
        url:"http://localhost:5000/api/lecture/" + course,
        method: "GET",
        dataType: "json",


        success: function(lectures){


            lectures.forEach(function(lectureId){

                $coursesTable.append(
                    "<tr>" +
                    "<td>" + lectureId.description + "</td>" +
                    "<td>" + lectureId.type + "</td>" +
                    "<td>" + lectureId.startDate + "</td>" +
                    "<td><a role='button' href='lagOgSeReview.html' class='btn btn-success btn-lg'> lag review</a></td>" +
                    "</tr>"
                );
            });
        },
    });
});
