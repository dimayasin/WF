$(document).ready(function () {

      //.fadein
      $('img' ).hover(function() {
     //     console.log("checking");
     //   $( this ).css( 'opacity', '0');
     var imgAlt = $(this).attr('altering-img');
     var originalImg=$(this).attr('src');

     $(this).attr('src', imgAlt);  
     $(this).attr('altering-img', originalImg);     

      }, function(){
        var originalImg = $(this).attr('altering-img');
        var imgAlt=$(this).attr('src');
   
        $(this).attr('src', originalImg);  
        $(this).attr('altering-img', imgAlt);   
      });


});




//        var imgAlt = $(this).attr('data-alt-src');

//$(this).attr('src', imgAlt);