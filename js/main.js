(function ($) {
"use strict";

	// preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})

	// meanmenu
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	// slider active
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 6000,
			dots: false,
			fade: true,
			pauseOnHover: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	//counterUp
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// project active 
	$('.project-active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	// brand active
	$('.brand-active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		dots:false,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:3
			},
			1200:{
				items:5
			}
		}
	})

	// testimonial active
	$('.testimonial-active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		nav:false,
		dots:true,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			}
		}
	})
	// testimonial-2 active
	$('.testimonial-active-2').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'none', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="ti-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


})(jQuery);


// Create a new div element
var whatsappDiv = document.createElement('div');

// Set the inner HTML to include the WhatsApp link, image, and text
whatsappDiv.innerHTML = `
    <a href="https://wa.me/+27846215182" target="_blank" class="whatsapp-float">
        <img src="https://informair.co.za/images/whatsapp.png" alt="WhatsApp Chat">
        <span>Chat with us</span>
    </a>
`;

// Append the div to the body
document.body.appendChild(whatsappDiv);

// Apply some styles dynamically
var style = document.createElement('style');
style.innerHTML = `
    .whatsapp-float {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 1000;
        display: flex;
        align-items: center;
        background-color: #fff;
        color: #20626b;
        padding: 5px;
        border-radius: 50px;
        border: 1px solid #20626b;
        text-decoration: none;
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-weight: 600;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .whatsapp-float img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .whatsapp-float span {
        margin-left: 10px;
    }
`;
document.head.appendChild(style);




