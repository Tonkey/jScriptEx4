$(document).ready(function () {

    setInterval(function () {
        $.get("http://localhost:8080/jsExercise4/getTimeServlet", function (data, textStatus) {
            $('#printTime').text(data);
//            alert("Done, with the following status: " + textStatus
//                + ". Here is the response: " + data);
        });
    }, 1000);
});


