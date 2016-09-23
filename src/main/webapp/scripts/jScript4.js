$(document).ready(function () {

    $('#north').click(function () {
        $(this).append('<text x="0" y="10" font-family="Verdana" font-size="55" fill="blue" > North </text>');
    });
    $('south').click(function () {
        $(this).append('<text x="0" y="10" font-family="Verdana" font-size="55" fill="blue" > South </text>');
    });
    $('east').click(function () {
        $(this).append('<text x="0" y="10" font-family="Verdana" font-size="55" fill="blue" > east </text>');
    });
    $('west').click(function () {
        $(this).append('<text x="0" y="10" font-family="Verdana" font-size="55" fill="blue" > west </text>');
    });
});