$(document).ready(function() {
	//menu
	$( ".menu__trigger" ).hover(function() {
		$( ".menu" ).toggleClass( "active" );
	});

	//slick
	$('.about-slider__section').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		fade: true,
		slidesToShow: 1,
		adaptiveHeight: true
	});
	$('.solutions__slider-block').slick({
		dots: true,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
	$('.testimonials__block').slick({
		dots: true,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

});
//paralax
$(window).scroll( function() {
	var scroll = $(window).scrollTop();
    var speed = .9;
    
	$('.scroller').each(function(){
		var $this = $(this);
        var $parent = $this.parent();
        var topOffset = $parent.offset().top;
        var height = $parent.outerHeight(true);
        var parallaxSize = (scroll - topOffset) * speed;
        
        // prevent parallax when scroll down
        if(scroll > topOffset + height) {
            return;
        }
		
        $this.css({ 
            'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
        });
	}); 
}); 