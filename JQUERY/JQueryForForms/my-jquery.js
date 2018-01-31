$(document).ready(function () {

    $('#fsubmit').on('click',function () {
        var first = $('input#fName').val();
        var last = $('input#lName').val();
        var mail= $('input#email').val();
        var cont=$('input#contact').val();

        $('div#Results').append('<tr><td>'+first+' </td><td>'+last+' </td><td>'+mail+' </td><td>'+cont+'</td></tr>');


    });


});
