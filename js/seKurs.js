/**
 * Created by johanneskrafftbruland on 12.11.2016.
 */

$(document).ready(function(){

    var $coursesTable = $("#coursesTable")

    $.ajax({
        url:"http://localhost:5000/api/course/"+ window.localStorage.getItem("storeSDKuserId"),
        method: "GET",
        dataType: "json",

        success: function(courses){
            console.log(courses)


            //var courses = JSON.parse(courses)
            console.log(courses)
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
        window.location.href= "/Klient/lectures.html#" + course
    })
});

//Logg ut funksjon
$(document).ready(function () {

    $("#LogOut").click(function () {
        window.location.href = "login.html";
    });
});
