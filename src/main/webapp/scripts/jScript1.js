$(document).ready(function () {

    //calls the .load on button click!
    $('#ass1Btn').click(function () {

        $('#div_quote').load("http://localhost:8080/jsExercise4/quoteServlet");
    });
    
    //calls the .load each hour(change time variable to 1000 for each second!!!)
    var time = 1*1000*60*60;
    setInterval(function (){
        $('#div_quote').load("http://localhost:8080/jsExercise4/quoteServlet");
    },time);
    
    
});