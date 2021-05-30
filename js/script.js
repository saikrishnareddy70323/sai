 $(document).ready(function(){
    
  preloaderFadeOutTime = 5000;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();

   $('#ab').click(function(){
        $('#about').fadeIn(3000);
        $('#education').fadeOut("slow");
        $("#getintouch").fadeOut('slow');
        
    });
    $('#ed').click(function(){
        $('#education').fadeIn(3000);
        $('#about').fadeOut('slow');
        $("#getintouch").fadeOut('slow');
        
    });
    $('#co').click(function(){
        $('#getintouch').fadeIn(3000);
        $('#about').fadeOut('slow');
        $("#education").fadeOut('slow');

    });
            
    if (screen.width <= 800) {
      $('#ed').click(function(){
      $('#education').fadeIn(3000);
      $("#getintouch").fadeOut('slow');
      $('#about').fadeOut('slow');
 $("#mobile").fadeOut('slow');
        
    });
    $('#ab').click(function(){
        $('#about').fadeIn(3000);
        $('#education').fadeIn(2000);
        $("#getintouch").fadeIn(2000);
        
 $("#mobile").fadeIn(2000);
        
    });
    $('#co').click(function(){
        $('#getintouch').fadeIn(3000);
        $('#about').fadeOut('slow');
        $("#education").fadeOut('slow');
        
 $("#mobile").fadeOut('slow');

    });

}

  }); 



  