$(document).ready(function () {

    $('img').click(function () {
        var imgAlt = $(this).attr('data-alt-src');

        $(this).attr('src', imgAlt);

    });


});
