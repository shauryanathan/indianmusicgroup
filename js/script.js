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


// HAMBURGER ANIMATION
var toggle = document.querySelector('.toggle input')

var animate = setInterval(() => {
    toggle.checked = !toggle.checked
}, 3000)

document.querySelector('body').addEventListener('click', () => {
  clearInterval(animate);
})



// HAMBURGER NAV
$(document).ready(function(){
	$('.click').click(function(){
		$('.collapse').toggleClass('is-clicked')
	})

})
$(document).ready(function(){
	$('.click').click(function(){
		$('.collapse ul').toggleClass('is-clicked')
	})
})

$(document).ready(function(){
	$('.click').click(function(){
		if($('.collapse').hasClass('is-clicked')){
			$('body').css('overflow-y' , 'hidden')
		} else {
			$('body').css('overflow-y' , 'scroll')
		}
	})
	
})

$(document).ready(function(){
    setTimeout(() => {$('.toggle').css('opacity', '1')},1000)
})