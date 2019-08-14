$(document).ready(function() {
	//menu 
	$( ".menu__hover" ).hover(function() {
		$( ".menu" ).addClass( "active" );
	});
	$( ".menu__trigger" ).click(function() {
		$( ".menu" ).removeClass( "active" );
	});
	$( ".menu-mobile-trigger" ).hover(function() {
		$( ".menu-mobile" ).addClass( "active" );
	});
	$( ".menu-mobile__trigger" ).click(function() { 
		$( ".menu-mobile" ).removeClass( "active" );
	});

	//slick
	$('.about-slider__section').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		fade: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
  		autoplaySpeed: 5000,
	});
	$('.solutions__slider-block').slick({
		dots: true,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
  		autoplaySpeed: 5000
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
// $(window).scroll( function() {
// 	var scroll = $(window).scrollTop();
//     var speed = .9;
    
// 	$('.scroller').each(function(){
// 		var $this = $(this);
//         var $parent = $this.parent();
//         var topOffset = $parent.offset().top;
//         var height = $parent.outerHeight(true);
//         var parallaxSize = (scroll - topOffset) * speed;
//         if(scroll > topOffset + height) {
//             return;
//         }
		
//         $this.css({ 
//             'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
//         });
// 	}); 
// }); 

//scroll anchor
$('.up a').on('click',function(){
	$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-5},800);
	return false;
});

//counter
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});