$(document).ready(function () {
    // Displays msg in console
    $('h2#helloWorld').click(function () {
        console.log("hello world");
    });

    // .toggle
    $("button#toggle").click(function () {
        $("p.NoDisplay").toggle("slow");
    });

    //.hide
    $("#hide").click(function () {
        $("p#hide1").hide("slow");
    });

    //.slideUp and .show

    $('h2#slide_up').click(function () {
        if ($("p#slideUp").is(":hidden")) {
            $("p#slideUp").show("slow");
        } else {
            $("p#slideUp").slideUp("slow");
        }
    });

    //.slideDown and .hide

    $('h2#slidedwn').click(function () {
        if ($("p#slideDown").is(":hidden")) {
            $("p#slideDown").slideDown("slow");
        } else {
            $("p#slideDown").hide();

        }
    });

    // .slideToggle

    $("h2#ST").click(function () {

        $("p#slideToggle").slideToggle("slow");

    });

    //.fadein
    $('h2#fadeIn').click(function () {
        $("li:hidden:first").fadeIn("slow");
    });
    //.addClass removeClass

    $("span#addClass").hover(function () {
        $(this).addClass("hilite");
    }, function () {
        $(this).removeClass("hilite");
    });

    //.before

    $( "p#before" ).before( document.createTextNode( "Hello" ) );

    //.after

    $( "p#after" ).after( document.createTextNode( "Hello" ) );

    // .append
    $( "p#image").append("<img src='https://media.giphy.com/media/3o7ZeMCXAFPvusagQU/giphy.gif' alt='bird' width='100px' height='100px' />");


});
