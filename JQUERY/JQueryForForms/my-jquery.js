$(document).ready(function () {

    $('#fsubmit').on('click',function () {
        var first = $('input#fName').val();
        var last = $('input#lName').val();

        $('div#Results').append('<tr><td>'+first+' </td><td>'+last+'</td></tr>');


    });


});
