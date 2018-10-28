jQuery(document).ready(function($) {
$(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");   
			},
			function() {
                $('.dropdown-submenu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-right");                
            },
			function() {
                $('.dropdown-submenu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-right"); 
            });
			$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
//Owl carousel
		//-----------------------------------------------
		if ($('.owl-carousel').length>0) {
			$(".owl-carousel.carousel").owlCarousel({
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation: true,
				navigationText: false,
				itemsDesktopSmall: [992,4],
				itemsTablet: [768,2],
				itemsMobile: [479,1]
			});
			
		};
// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
						if(delay > 1) $this.css("effect-delay", delay + "ms");
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, delay);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};



});
jQuery(window).ready(function($) {
	$('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 180,
        itemMargin: 0,
        asNavFor: '#slider'
    });
	
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
		 prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: true,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
	 $('.flexslider1').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
		 prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: true,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
	
 
  
});
