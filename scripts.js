
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "rgba(0,0,0,0.3)");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })