$(function() {
	function initPortfolio() {
		"use strict";

		var portfolios = [
            { 'cssClass' : 'happening', 'type' : 'vimeo', 'urlid': '46566682'}, 
            { 'cssClass' : 'bravo', 'type' : 'vimeo', 'urlid' : '20132403'}, 
            { 'cssClass' : 'paypal', 'type' : 'youtube', 'urlid' : 'dBCBroGoFLk'}, 
            { 'cssClass' : 'sulamerica', 'type' : 'youtube', 'urlid' : 'mBGpp5AwUog'}, 
            { 'cssClass' : 'accurracy', 'type' : 'vimeo', 'urlid' : '20552722'}, 
            { 'cssClass' : 'nestle', 'type' : 'vimeo', 'urlid' : '18621918' }
         ];

         $('.portfolio .arrow').click(function(e) {
         	e.preventDefault();

         	var $button = $(this),
         		$arrows = $('.portfolio .arrow'),
         		actual = $button.data('actual'),
         		$container = $('#portfolio-container');

         	$container.removeClass();

         	if($button.hasClass('next')) {
         		var next = 0;

         		if (actual == portfolios.length-1) {
         			next = 1;
         		}else {
         			next = actual+1;
         		}

         		$arrows.data('actual', next);

         		$container.addClass(portfolios[next].cssClass);

         	}else {
         		var prev = 0;

         		if (actual <= 0) {
         			prev = portfolios.length-1;
         		}else {
         			prev = actual-1;
         		}
 
         		$arrows.data('actual', prev);

         		$container.addClass(portfolios[prev].cssClass);
         	}
         });

         $(document).delegate('.portfolio .tv').click(function(e) {
            var actual = $('.portfolio .arrow').eq(0).data('actual'),
               tv = $('#portfolio-tv')[0],
               url = null;
            
            if (portfolios[actual].type == 'vimeo') {
               url = "http://player.vimeo.com/video/" + portfolios[actual].urlid;
            }else {
               url = "http://www.youtube.com/embed/" + portfolios[actual].urlid;
            }

            $('#video-frame').attr('src', url).show();
         });
	}

   function handleLinks() {
      $('.nav-item').click(function(e) {
         e.preventDefault();

         $('.nav-item').filter('.selected').removeClass('selected');

         $(this).addClass('selected');

         var target = $(this).data('target');

         $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
      });

      $('#speech').click(function(e) {
         e.preventDefault();
         
         $('html, body').animate({
            scrollTop: $('#what-we-do').offset().top
        }, 500);
      });
   }

   this.init = function() {
         "use strict";

         initPortfolio();
         handleLinks();
    }

    this.init(); 
}(jQuery));