$(document).ready(function () {

    $('#table_here').append('<table />');

    $('#table_here table').append('<tr><th>Name</th><th>age</th><th>email</th></tr>');


    $('#button').click(function () {
        $.ajax({url: "http://localhost:8080/jsExercise4/PersonServlet", dataType: 'json', success: function (result) {
                console.log(result);
                tRow = $('<tr>');
                tCell = $('<td>').html(result.name);
                tCell2 = $('<td>').html(result.age);
                tCell3 = $('<td>').html(result.email);
                $('#table_here table').append(tRow.append(tCell, tCell2, tCell3));
            }});
    });
    
    $('#submitReq').click(function (){
        $.post("http://localhost:8080/jsExercise4/PersonServlet",{
            name: $('#name').val(),
            age: $('#age').val(),
            email: $('#email').val()
        });
    });
    
});
