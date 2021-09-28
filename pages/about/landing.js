

$(document).ready(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if (wScroll > $('.content').offset().top - ($(window).height() / 2)) {
            $('.content img').each(function(){
                $('.content img').addClass('is-showing')
            })
        }
    })
})