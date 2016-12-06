/**Created by johanneskrafftbruland on 25.11.2016.*/

$(document).ready(function(){

    var course = location.hash;
    var course = course.replace('#', '');

    var $coursesTable = $("#adminCoursesTable")
    var code = JSON.parse(localStorage.getItem("lectureCode"));

//Her henter man og får kontakt med serveren. eksempelet fra chrashcourset til books

    $.ajax({
        url:"http://localhost:5000/api/lecture/" + course,
        method: "GET",
        dataType: "json",
        //contentType: "application/json",

        success: function(lectures){

            lectures.forEach(function(lectureId){

                $coursesTable.append(
                    "<tr>" +
                    "<td>" + lectureId.description + "</td>" +
                    "<td>" + lectureId.type + "</td>" +
                    "<td>" + lectureId.startDate + "</td>" +
                    "<td><a role='button' data-id=" + lectureId.id + " class='btn btn-success btn-lg toadminLecture'> se reviews</a></td>" +
                    "</tr>"
                );
            });
        },
    });


    $("#adminCoursesTable").on("click",".toadminLecture",function(e){
        e.preventDefault();
        var id = $(this).data("id");
        window.location.href = "seOgSlettAlleReviews.html#" + id
    })

});
