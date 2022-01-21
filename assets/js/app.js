(function ($) {
	
	"use strict";
  /* The code below will set Owl-coursel for the service items
	 and allow you to configure the number of items and margin. */
	$('.owl-service-item').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  })


})(window.jQuery);