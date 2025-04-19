(function($){
	'use strict';
	
	jQuery(document).ready(function(){
	
		/*PRELOADER JS*/
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		/*END PRELOADER JS*/
		
		 /* One Page Navigation & Wow.js */
		$(".main_menu").onePageNav({
		  currentClass: "active",
		  changeHash: true,
		  scrollSpeed: 750,
		  scrollThreshold: 0.5,
		  filter: ":not(.external)",
		  easing: "swing",
		  begin: function () {
			console.log("Scrolling started");
		  },
		  end: function () {
			console.log("Scrolling ended");
		  },
		});

		/* Navbar Toggle and Reduce */
		var nav = $("nav");
		var navHeight = nav.outerHeight();

		$(".navbar-toggler").on("click", function () {
		  if (!$("#mainNav").hasClass("navbar-reduce")) {
			$("#mainNav").addClass("navbar-reduce");
		  }
		});

		const toggler = document.querySelector(".navbar-toggler");
		const navbarCollapse = document.querySelector(".navbar-collapse");

		if (navbarCollapse.classList.contains("show")) {
		  navbarCollapse.classList.remove("show");
		}

		if (!toggler.classList.contains("collapsed")) {
		  toggler.classList.add("collapsed");
		  toggler.setAttribute("aria-expanded", "false");
		}

		/* Navbar Scroll Behavior */
		$(window).on("scroll", function () {
		  var pixels = 50;
		  var top = 1200;

		  if ($(window).scrollTop() > pixels) {
			$(".navbar-expand-md").addClass("navbar-reduce");
			$(".navbar-expand-md").removeClass("navbar-trans");
		  } else {
			$(".navbar-expand-md").addClass("navbar-trans");
			$(".navbar-expand-md").removeClass("navbar-reduce");
		  }

		  if ($(window).scrollTop() > top) {
			$(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
		  } else {
			$(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
		  }
		});

		/* Scroll to Top */
		$(".scrolltop-mf").on("click", function () {
		  $("html, body").animate({ scrollTop: 0 }, 1000);
		});

		/* Close responsive menu when a scroll trigger link is clicked */
		$(".js-scroll").on("click", function () {
		  $(".navbar-collapse").collapse("hide");
		});


		/* Sticky Nav */
		$(window).on("scroll", function () {
		  if ($(window).scrollTop() > 200) {
			$(".scrolling-navbar").addClass("top-nav-collapse");
		  } else {
			$(".scrolling-navbar").removeClass("top-nav-collapse");
		  }
		});

			
		/*START WOW ANIMATION JS*/
		  new WOW().init();	
		/*END WOW ANIMATION JS*/	
	
		/* START ISOTOP JS */
			var $grid = $('.work_content_area').isotope({
			  // options
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/* END ISOTOP JS */
		
		/* START LIGHTBOX */
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		/* END LIGHTBOX JS */
		
		/* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */
		
		/* START SERVICE JS */
			$(".service_slider").owlCarousel({
				loop:true,
				navText:false,
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				margin: 20,
				autoPlay:true,
				items:3,
				responsive:{
					320:{
						items:1
					},
					360:{
						items:1
					},
					767:{
						items:1
					},
					991:{
						items:2
					},
					1200:{
						items:3
					}
				}
				
			});
		/* END SERVICE JS */
		
		/* START TESTIMONIAL JS */
			$(".testimonial_area").owlCarousel({
				loop:true,
				navText:false,
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				margin: 30,
				autoPlay:true,
				items:1,
				responsive:{
					320:{
						items:1
					},
					767:{
						items:1
					},
					991:{
						items:1
					},
					1200:{
						items:1
					}
				}
				
			});
		/* END TESTIMONIAL JS */
		
		/*START CONTACT MAP JS*/
			if ($('.map-canvas').length) {
		  const styles = [
			{
			  featureType: "all",
			  elementType: "labels.text.fill",
			  stylers: [{ saturation: 36 }, { color: "#ffffff" }, { lightness: 40 }]
			},
			{
			  featureType: "all",
			  elementType: "labels.text.stroke",
			  stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }]
			},
			{
			  featureType: "all",
			  elementType: "labels.icon",
			  stylers: [{ visibility: "off" }]
			},
			{
			  featureType: "administrative",
			  elementType: "geometry.fill",
			  stylers: [{ color: "#000000" }, { lightness: 20 }]
			},
			{
			  featureType: "administrative",
			  elementType: "geometry.stroke",
			  stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }]
			},
			{
			  featureType: "landscape",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 20 }]
			},
			{
			  featureType: "poi",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 21 }]
			},
			{
			  featureType: "road.highway",
			  elementType: "geometry.fill",
			  stylers: [{ color: "#000000" }, { lightness: 17 }]
			},
			{
			  featureType: "road.highway",
			  elementType: "geometry.stroke",
			  stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }]
			},
			{
			  featureType: "road.arterial",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 18 }]
			},
			{
			  featureType: "road.local",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 16 }]
			},
			{
			  featureType: "transit",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 19 }]
			},
			{
			  featureType: "water",
			  elementType: "geometry",
			  stylers: [{ color: "#000000" }, { lightness: 17 }]
			}
		  ];

		  const mapOptions = {
			center: new google.maps.LatLng(40.7143528, -74.0059731),
			zoom: 12,
			styles: styles,
			scrollwheel: false,
			panControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			disableDefaultUI: false,
			zoomControl: true,
			disableDoubleClickZoom: false,
			fullscreenControl: false
		  };

		  const initMap = function () {
			const map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);

			const marker = new google.maps.Marker({
			  position: mapOptions.center,
			  map: map,
			  icon: {
				url: "images/map_pin.png",
				scaledSize: new google.maps.Size(50, 62)
			  }
			});
		  };

		  // Initialize on document ready and window resize
		  initMap();
		  google.maps.event.addDomListener(window, 'resize', initMap);
		}

	   /*END CONTACT MAP JS*/
		
	});	

	 /* Hide Navbar on Scroll */
	  var prevScrollpos = window.pageYOffset;
	  window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		var navbar = document.getElementById("mainNav");

		if (prevScrollpos > currentScrollPos) {
		  // Scrolling up: Show the navbar
		  navbar.style.top = "0";
		} else {
		  // Scrolling down: Hide the navbar
		  navbar.style.top = "-100px"; // Adjust based on navbar height
		}
		prevScrollpos = currentScrollPos;
	  };
		
})(jQuery);