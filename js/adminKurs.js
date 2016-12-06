/**
 * Created by johanneskrafftbruland on 30.11.2016.
 */

$(document).ready(function(){

    var $coursesTable = $("#coursesTable")

    $.ajax({
        url:"http://localhost:5000/api/course/"+ window.localStorage.getItem("storeSDKuserId"),
        method: "GET",
        dataType: "json",
        //contentType: "application/json",


        success: function(courses){

            //var courses = JSON.parse(courses)
            courses.forEach(function(course){

                $coursesTable.append(
                    "<tr>" +
                    "<td>" + course.code + "</td>" +
                    "<td><a role='button' data-course=" + course.displaytext + " class='btn btn-success btn-lg knap'> Se lectures</a></td>" +
                    "</tr>"
                );
            });
        },

    });

    $("#coursesTable").on("click", ".knap", function(){
        var course = $(this).data("course");
        window.location.href= "/Klient/adminLectures.html#" + course
    })
});

//Logg ut funksjon
$(document).ready(function () {

    $("#LogOut").click(function () {
        window.location.href = "login.html";
    });
});
