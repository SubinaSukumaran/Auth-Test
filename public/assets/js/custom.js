/**---
Project Name	: e dRop
Doc Name 	 	: custom.js
Author Name		: Haris Webdesign [Haris karat]
Email       	: haris.karat@gmail.com
Portfolio		: https://www.behance.net/hariswebdesign
Google      	: http://gogle.com/#q=Haris+Webdesign
--- **/

var isIEBrows = navigator.appVersion.indexOf("MSIE") != -1 || navigator.appVersion.indexOf('Trident/') > 0;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

//---------------------------------------------------->:: SVG ::<----------------------------------------------------
//fillCode
$(function () {
	$('img.svg').each(function () {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, else we gonna set it if we can.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
});

//---------------------------------------------------->:: header-sticky ::<----------------------------------------------------
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$("header").addClass("sticky");
	} else {
		$("header").removeClass("sticky");
	}
	//
});

//---------------------------------------------------->:: ripple ::<----------------------------------------------------

$(".btn-ripple").click(function (e) {
  
	// Remove any old one
	$(".ripple").remove();
  
	// Setup
	var posX = $(this).offset().left,
		posY = $(this).offset().top,
		buttonWidth = $(this).width(),
		buttonHeight =  $(this).height();
	
	// Add the element
	$(this).prepend("<span class='ripple'></span>");
  
	
   // Make it round!
	if(buttonWidth >= buttonHeight) {
	  buttonHeight = buttonWidth;
	} else {
	  buttonWidth = buttonHeight; 
	}
	
	// Get the center of the element
	var x = e.pageX - posX - buttonWidth / 2;
	var y = e.pageY - posY - buttonHeight / 2;
	
   
	// Add the ripples CSS and start the animation
	$(".ripple").css({
	  width: buttonWidth,
	  height: buttonHeight,
	  top: y + 'px',
	  left: x + 'px'
	}).addClass("rippleEffect");
  });


// --------------------------------------------------------- //
// OFFSET DIV
// --------------------------------------------------------- //
	var headerHeight = $('header').height();
	$('.top-offset').css({
		'height': headerHeight + 0, 'top': - headerHeight - 25
	});

//---------------------------------------------------->:: Search Auto Filter ::<----------------------------------------------------
/* HTML code
	<input type="text" name="" onkeyup="allsearch()" onclick="allsearch()" id="searchAutoFilter" class="form-control" autocomplete="off">
	<div id="searchRslt1">
		Search data comes here.
	</div>
*/

function allsearch()
    {
         $("#searchRslt1").addClass('show');      
         var searchname=$('#searchAutoFilter').val();   
         if(searchname=="")    
        {        
              $("#searchRslt1").removeClass('show');    
        }
    }
	$(document).mouseup(function(e) {    
		var container = $("#searchAutoFilter");    
		if (!container.is(e.target) && container.has(e.target).length === 0)     
       {       
		$("#searchRslt1").removeClass('show');    }
	});

	//search form 2
	function allsearch2()
    {
         $("#searchRslt2").addClass('show');      
         var searchname=$('#searchAutoFilter2').val();   
         if(searchname=="")    
        {        
              $("#searchRslt2").removeClass('show');    
        }
    }
	$(document).mouseup(function(e) {    
		var container = $("#searchAutoFilter2");    
		if (!container.is(e.target) && container.has(e.target).length === 0)     
       {       
		$("#searchRslt2").removeClass('show');    }
	});


//---------------------------------------------------->:: header-margin ::<----------------------------------------------------

// $(window).resize(function () {
// 	var width = $(window).width();
// 	var height = $('header').height();
// 	// if(width >= 300 && width <= 900){
// 	if (width >= 300) {
// 		$('body').css({
// 			'padding-top': height + 10
// 		});
// 	}
// 	else {
// 		$('body').css({
// 			'padding-top': 0
// 		});
// 	}	
// })
// .resize();


//---------------------------------------------------->:: progressively ::<----------------------------------------------------

progressively.init({
	onLoadComplete: function() {
		console.log('All images loaded! By: HarisWebdesign https://www.behance.net/hariswebdesign');
	}
});

/* HTML

<figure class="progressive">
  <img class="progressive__img progressive--not-loaded" data-progressive="img/highQualityImg.png" src="img/lowQualityImg.png">
</figure>

//Use medium quality images for mobile devices
<figure class="progressive">
  <img class="progressive__img progressive--not-loaded" data-progressive="img/highQualityImg.png" data-progressive-sm="img/mediumQualityImg.png" src="img/lowQualityImg.png">
</figure>

//Use as bg-image
<div class="progressive__bg progressive--not-loaded" data-progressive="img/highQualityImg.png" data-progressive-sm="img/mediumQualityImg.png" style="background-image: url('img/lowQualityImg.png');"></div>

*/

	
	
//---------------------------------------------------->:: Video responsive ::<----------------------------------------------------

$(document).ready(function() {
		/* Video responsive function */	
		$('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		$('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		/* Video responsive function end */

//---------------------------------------------------->:: btn-aware ::<----------------------------------------------------

		$('.btn-aware')
			.on('mouseenter', function(e) {
					var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
					$(this).find('span').css({top:relY, left:relX})
			})
			.on('mouseout', function(e) {
					var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
		});
});//DOM

//---------------------------------------------------->:: owl-carousel ::<----------------------------------------------------
$(document).ready(function () {
	$(".owl-banner").owlCarousel({
		items: 1,
		singleItem: true,
		margin: 0,
		smartSpeed: 1800,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		loop: true,
		lazyLoad:true,
		navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				dots: false,
				nav: false
			},
			768: {
				
				
			},
			991: {
				//dots: true
			}
		}
	});//owl-banner
	//disable-owl-swipe [<div class="item disable-owl-swipe"></div>]
	$(".disable-owl-swipe").on("touchstart mousedown", function(e) {
		// Prevent carousel swipe
		e.stopPropagation();
	   })
	//disable-owl-swipe
	
	$(".owl-2").owlCarousel({
		// items: 1,
		loop: true,
		nav: true,
		dots: true,
		smartSpeed: 700,
		margin: 15,
		// stagePadding: 50,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		autoHeight: false,
		navText: [
			"<img src='assets/images/icons/long-arrow-left.svg'>","<img src='assets/images/icons/long-arrow-right.svg'>"
			],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 8,
				stagePadding: 30,
				dots: false
			},
			576: {
				items: 2,
				margin: 10,
				dots: true,
				stagePadding: 50
			},
			650: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});//owl-2

});//DOM


//form validation ==== 
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();


//   show password
  $(".toggle-password").click(function() {
	$(this).toggleClass("fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
	  input.attr("type", "text");
	} else {
	  input.attr("type", "password");
	}
  });
  /*
  HTML Code
  	<input id="password-field" type="password" class="form-control" name="password" value="secret">
	<i class="toggle-password fas fa-eye" toggle="#password-field"></i>
  */


//searchBtn ==== 
// $('#to-search').click(function () {      // When arrow is clicked
// 	$('body,html').animate({
// 		scrollTop: 0                       // Scroll to top of body
// 	}, 600);
// 	$('.top-search input').focus();
// });

//smoothScroll
$(document).ready(function () {
	$('.ToScroll').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 100);
		return false;
	});

//---------------------------------------------------->:: clickToScroll ::<----------------------------------------------------

	$('.clickToScroll').click(function() {   // on button click
		$("html, body").animate({    // catch the `html, body`
			scrollTop:0              // make their `scrollTop` property 0, to go at the top
		}, 1000);                    // in 1000 ms (1 second)
	});
	
	//a[href^="#"] link href
	// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });//querySelectorAll




//---------------------------------------------------->:: #LinkScroll ::<----------------------------------------------------

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	
});//DOM



// --------------------------------------------------------- //
// SMOOTH SCROLL
// --------------------------------------------------------- //
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    var offset = 0;
    var headerHeight = $('header').outerHeight();
    //var bannerHeight = $('.banner').outerHeight(); // including + banner height

    // if ($('.banner').length && $('body').hasClass('page-inner')) {
    //   if ($(window).outerWidth() < 991) {
    //     // offset = bannerHeight + headerHeight - 45; // including + banner height
    //     offset = headerHeight + 15;
    //   } else {
    //     offset = headerHeight + 45;
    //   }
	// }
	
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 600);
      }
    }
  });//click function
// --------------------------------------------------------- //
// FLOATING LABEL
// --------------------------------------------------------- //
	$('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
		$(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
	  }).trigger('blur');  
	    
//input focus ==== 
$("input.focused").parents(".is-floating-label").addClass("is-focused");



	  
// --------------------------------------------------------- //
// CUSTOM STICKY
// --------------------------------------------------------- //
	if ($('div').hasClass('sticky-1')) {
		var stickyTop = $('.sticky-1').offset().top;
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= stickyTop) {
			//$('.sticky-1').css({position: "fixed", top: "0px"});
			$('.sticky-1').addClass('fixed-top');
		} else {
			//$('.sticky-1').css({position: "relative", top: "0px"});
			$('.sticky-1').removeClass('fixed-top');
		}
	});
	}//sticky

// --------------------------------------------------------- //
// LinkActive / Siblings
// --------------------------------------------------------- //

	// $(document).ready(function () {
	// 	$('nav a').click(function(e) {
	// 		$('nav a.active').removeClass('active');	
	// 		$(this).addClass('active');
	// 		e.preventDefault();
	// 	});
	// 	// removing active on logo clcik
	// 	$('.brand a').click(function(e) {
	// 		$('nav a.active').removeClass('active');
	// 	});
	// });	//DOM
	
// --------------------------------------------------------- //
// FAQ FILTERS
// --------------------------------------------------------- //

// $('.faq-filters a').click(function(){
// 	$(this).siblings().removeClass('active');
// 	$(this).addClass('active');
//   });
  
//   $('.faq-filters .faq-all').click(function(){
// 	$('.faq-item').show();
//   });
  
//   $('.faq-filters .faq-general').click(function(){
// 	$('.item-general').show();
// 	$('.item-sellers').hide();
// 	$('.item-buyers').hide();
// 	$('.item-agents').hide();
//   });
  
//   $('.faq-filters .faq-sellers').click(function(){
// 	$('.item-general').hide();
// 	$('.item-sellers').show();
// 	$('.item-buyers').hide();
// 	$('.item-agents').hide();
//   });
  
//   $('.faq-filters .faq-buyers').click(function(){
// 	$('.item-general').hide();
// 	$('.item-sellers').hide();
// 	$('.item-buyers').show();
// 	$('.item-agents').hide();
//   });
  
//   $('.faq-filters .faq-agents').click(function(){
// 	$('.item-general').hide();
// 	$('.item-sellers').hide();
// 	$('.item-buyers').hide();
// 	$('.item-agents').show();
//   });
	


$(document).ready(function () {

// --------------------------------------------------------- //
// CUSTOM ACTIVITIES 
// --------------------------------------------------------- //

/* full-screen  ============ */
$(function () {
    //Adjust element dimensions on resize event
    $(window).on('resize', function () {
        $(".full-screen").css("height", $(window).height()).css("width", $(window).width());
    });
    //Trigger the event
    $(window).trigger('resize');
});

//full-height
$(".full-height").css("height", $(window).height());

// --------------------------------------------------------- //
// HAMBURGER MENU
// --------------------------------------------------------- //
$('#hamburgerButton').click(function(){
	$('body').toggleClass('has-sidebar overflow-hidden');
	$('#sidebar').toggleClass('show');
});
/* close  ============ */	
  $('.menu-overlay, #sidebarClose').click(function(){
	$('body').toggleClass('has-sidebar overflow-hidden');
	$('#sidebar').toggleClass('show');
});



//accordion-1
	$(".filter-item").on("click", ".filter-head", function() {
		$(this).toggleClass("active").next().slideToggle();
	});
		
	//tab-nav-burger (if you need any body acroll to offset any specific link click)	
	$("#show-nav-burger").click(function () {
		$(".tab-nav-burger").addClass("active");
	});
	$(".page-account .tab-nav-burger").click(function () {
		$(this).removeClass("active");
		$('html, body').animate({
			scrollTop: $(".main-area").offset().top
		}, 300);
	});

/* expand  ============ */
	$('.btn-expand').click(function () {
		$(this).closest('.card').find('.card-toggle').slideToggle('1200');
		$(this).closest('.card').toggleClass('expanded');
		$(this).toggleClass('active');
	});
/* collapse  ============ */
	$('.btn-collapse').click(function () {
		$(this).closest('.card').find('.card-toggle').slideToggle('1200');
		$(this).closest('.card').toggleClass('expanded');
		$(this).closest('.card').find('.btn-expand').toggleClass('active');
	});

/* show-reply  ============ */
	$('.show-reply').click(function () {
		$(this).closest('.comment-item').find('.reply-form').slideToggle('1200');
		$(this).closest('.comment-item').toggleClass('reply-shown');
	});
/* hide-reply  ============ */
	$('.hide-reply').click(function () {
		$(this).closest('.comment-item').find('.reply-form').slideToggle('1200');
		$(this).closest('.comment-item').toggleClass('reply-shown');
	});



	//article Class	
	$("article .content table").addClass("table table-bordered");
	$("article .content ul").addClass("list-unstyled type-disc");
	$('article .content img').not('.progressive__img').wrap('<figure class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s"></figure>');
	
	//font button
	let buttons = $('.typo-minus,.typo-plus'), min = 16, max = 22;

    buttons.on('click', function () {
        let content = $('article .content'),
            oldClass = content.attr('class'),
            num = parseInt(oldClass.split('typo-size-')[1]);
         buttons.prop('disabled', false);
        if ($(this).hasClass('typo-plus') && (num < max)) {
            num += 2;
        } else if ($(this).hasClass('typo-minus') && (num > min)) {
            num -= 2;
        }
        content.removeClass(oldClass).addClass('content typo-size-' + num);
      	if((num === max) || (num === min))
			 $(this).prop('disabled', true)
    });//font-button
	//
	// $('[data-spy="scroll"]').each(function () {
	// 	var $spy = $(this).scrollspy('refresh')
	//   })
	
});//DOM

//---------------------------------------------------->:: Modal ::<----------------------------------------------------

//PopupVideo
$(document).ready(function () {
    autoPlayYouTubeModal();
});
function autoPlayYouTubeModal() {
        var trigger = $('.videoModalTriger');
    trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });
};

/*
HTML code
<button class="btn btn-default btn-lg videoModalTriger" data-videoModal="https://www.youtube.com/embed/HBdcL7YsdBY" data-toggle="modal" data-target="#videoModal">Play Video 2</button>
<div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <iframe width="100%" height="350" src="" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>

*/


$(document).ready(function () {
//Go to Top
	$().UItoTop({
        easingType: 'easeOutQuart',
        containerClass: 'ui-to-top fa fa-angle-up'
	});


/* wow  ============ */
	new WOW(
			{
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       50,          // distance to the element when triggering the animation (default is 0)
				mobile:       false       // trigger animations on mobile devices (true is default)
			}
	).init();

//tooltip
	if ($(window).width() >= 992) {
		$('.fa-tip').tooltip({
			placement: 'top',
			trigger : 'hover'
		});
		$('.fa-tip-bottom').tooltip({
			placement: 'bottom',
			trigger : 'hover'
		});
		$('.fa-tip-left').tooltip({
			placement: 'left',
			trigger : 'hover'
		});
		$('.fa-tip-right').tooltip({
			placement: 'right',
			trigger : 'hover'
		});
	}
//popover
	$('[data-toggle="popover"]').popover()
	//Keep open while hovering
	$(".hw-pop").popover({ trigger: "manual" , html: true, animation:false})
	.on("mouseenter", function () {
		var _this = this;
		$(this).popover("show");
		$(".popover").on("mouseleave", function () {
			$(_this).popover('hide');
		});
	}).on("mouseleave", function () {
		var _this = this;
		setTimeout(function () {
			if (!$(".popover:hover").length) {
				$(_this).popover("hide");
			}
		}, 300);
	});//Keep open while hovering
	//custom Popover class
	;(function($) {
		if (typeof $.fn.popover.Constructor === 'undefined') {
			throw new Error('Bootstrap Popover must be included first!');
		}
		var Popover = $.fn.popover.Constructor;
		// add customClass option to Bootstrap Popover
		$.extend( Popover.Default, {
			customClass: ''
		});
		var _show = Popover.prototype.show;
		Popover.prototype.show = function () {
			// invoke parent method
			_show.apply(this,Array.prototype.slice.apply(arguments));

			if ( this.config.customClass ) {
				var tip = this.getTipElement();
				$(tip).addClass(this.config.customClass);
			}
		};
	})(window.$);
	//custom Popover class

});//DOM

/* Magnific Popup ============ */
$(document).ready(function() {
	'use strict';	
	if($('.mfp-gallery-with-owl').length){
		$('.mfp-gallery-with-owl').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-fade',
			removalDelay: 300,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}				
		});
	}
	/* magnificPopup function */
	if($('.mfp-gallery').length)
	{
		$('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});	
	}	
	/* magnificPopup function end */
	
	/* magnificPopup for paly video function */		
	if($('.mfp-video').length)
	{
		$('.mfp-video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});	
	}
	
	/* magnificPopup for paly video function end*/
	if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length)
	{
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});	
	}

	// zoom Image
	$('.image-zoom').magnificPopup({
		type:'image',
		// mainClass: 'mfp-fade',
		mainClass: 'mfp-with-zoom',
		closeOnContentClick: true,
		closeBtnInside:true,
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it			
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out'
		}
	});

	// inline content
	$('.open-popup-link').magnificPopup({
		type:'inline',
		closeBtnInside:false,
		//mainClass: 'mfp-with-zoom',
		mainClass: 'full-popup',
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});
     
	  $('.close-popup-link').click(function() {
        $.magnificPopup.close(); // custom close button 
	 });
});


//year
$('.current-year').html(new Date().getFullYear());

//scrollbar
// http://gromo.github.io/jquery.scrollbar/demo/basic.html
/*
use this class for disable horizontal scrollbar [.scrollbar-*macosx* .no-scroll-x]
*/
$('.scrollbar-macosx').scrollbar();
$('.scrollbar-inner').scrollbar();
$('.scrollbar-light').scrollbar();
$('.scrollbar-rail').scrollbar();
$('.scrollbar-dynamic').scrollbar();
$('.scrollbar-chrome').scrollbar();
$('.textarea-scrollbar').scrollbar(); /*<textarea class="textarea-scrollbar scrollbar-outer">....</textarea>*/

	
/*niceSroll Documentation: https://github.com/inuyaksa/jquery.nicescroll#configuration-parameters */
/*$("body").niceScroll({
  cursorcolor:"aquamarine",
  cursorwidth:"16px"
});

$(".has-scroll").niceScroll({
    cursorcolor:"rgba(0,0,0,0.5)",
	cursorwidth:"6px",
	touchbehavior: true,
	grabcursorenabled: true,
	mousescrollstep: 30
  });*/
//Includes
// $("#includedHeader").load("header.html");


/*-----------------------------------------------  daterangepicker -----------------------------------------------------*/
/*Usage Guide: http://www.daterangepicker.com/#config*/
$('.datepicker').daterangepicker({
	autoUpdateInput: true,
    startDate: "01/21/2021",
    endDate: "02/10/2021",
	opens: "center",
	cancelClass: "btn-outline-secondary"
});

// advanced
$(function() {
	$('input[name="datefilter"]').daterangepicker({
		autoUpdateInput: false,
		// singleDatePicker: true,
		cancelClass: "btn-outline-secondary",
		startDate: "01/21/2021",
		endDate: "06/14/2021",
		drops: "down",
		opens: 'right',
		locale: {
			cancelLabel: 'Clear'
		}
	});  
	$('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
		$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'))
		$(this).parents('.is-floating-label').toggleClass('is-focused'); // for floating label
	});
  
	$('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
		$(this).val('');
	});  
});

//today AutoUpdate
$('.datepickerChart').daterangepicker({
	autoUpdateInput: true,
	opens: "center",
    singleDatePicker: true,
	cancelClass: "btn-outline-secondary",
        locale: {
        format: 'DD/MM/YYYY'
        }
});


/*-----------------------------------------------  select2 -----------------------------------------------------*/
/*Usage Guide: 
https://select2.org/getting-started/basic-usage
https://github.com/select2/select2 */

$(document).ready(function() {
   // $('.select2').select2(); /*normal*/
    $('.select2').select2({
	   //allowClear: true
	   //placeholder: "Select a programming language",
	   //dropdownParent: $('body')
	   //theme: "hw-theme"
	   //closeOnSelect: false
	  
    });
    //$('.select2').append('<i class="fa fa-angle-down"></i>');

	$('.select2-multiple').select2({
		allowClear: true,
		placeholder: "Select a zone"
	 });

});


/*-----------------------------------------------  fancybox -----------------------------------------------------*/


// $('.fancybox').on('click', function() {
// 	var visibleLinks = $('.fancybox');

// 	$.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

// 	return false;
//   });



/*-----------------------------------------------  notify -----------------------------------------------------*/
// Open notify.js

/*Usage Guide: 
https://github.com/mouse0270/bootstrap-notify
http://bootstrap-notify.remabledesigns.com/ */

// $.notify("Coupon Code Copied", {
// 	animate: {
// 		enter: 'animated slideInDown',
// 		exit: 'animated slideInOut'
// 	}
// });


