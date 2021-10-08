!(function($) {
	"use strict";
// Pre-loader
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
  }, 2000);

// venobox
$(document).ready(function(){
	$('.venobox').venobox(); 
});
$('.counter-count').each(function () {
	$(this).prop('counter',0).animate({
		Counter: $(this).text()
	}, {
	  
	  //chnage count up speed here
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});
     //contact validation
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
  /*===========================
  == Contact Submittion Alert ==
  =============================*/
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              if (form.checkValidity() === true) {
                alert("Message has been Sent");
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },false);
// Welcome-corusel
$('#schedule-carousel').owlCarousel({
	    loop:true,
	    nav:false,
		dots:false,
		autoplay:true,
		smartSpeed: 3000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
// Testimonial-carousel
$('#trainers-carousel').owlCarousel({
	center: true,
	loop: true,
	dots: true,
	margin: 0,
	responsive: {
		0: {
			items: 2,
			margin: 10
		},
		576: {
			items: 3
		},
		768: {
			items: 4
		},
		1200: {
			items: 6
		}
	}
});
	$('#testimonials-carousel').owlCarousel({
	    loop:true,
	    nav:false,
		dots:false,
		autoplay:true,
		smartSpeed: 3000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
// Clients-carousel
	$('#clients-carousel').owlCarousel({
	    loop:true,
	    margin:5,
	    nav:false,
		dots:false,
		autoplay:false,
		smartSpeed: 1500,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:6
	        },
			1200:{
	            items:6
	        }
	    }
	})
// design-carousel
	$('#designs-carousel').owlCarousel({
	    loop:true,
	    margin:20,
		autoplay:false,
	    nav:false,
		dots:false,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        800:{
	            items:3
	        },
			1000:{
	            items:4
	        },
			1200:{
				items:5
			}
	    }
	})
// owl-carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
// Filter-Gallery
	$(document).ready(function(){
		$('.btn-filter').click(function(){
		  const value = $(this).attr('data-filter');
		  if (value == 'all'){
			$('.projects-item').show('1000');
		  }
		  else {
			$('.projects-item').not('.'+value).hide('1000');
			$('.projects-item').filter('.'+value).show('1000');
		  }
		})
	  //add active class on selected item
	  $('.btn-filter').click(function(){
		$(this).addClass('btn-active').siblings().removeClass('btn-active');    
		})
	  })
	  $('.counter-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
		  
		  //chnage count up speed here
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	window.onscroll=function(){
		myfunction()
	};
	var navbar = document.getElementById("mynavbar");
	function myfunction(){
		if(window.pageYOffset>=100){
			navbar.classList.add("sticky")
		}
		else{
			navbar.classList.remove("sticky");
		}
	}
/*===========================
====== Porfolio Filter ======
=============================*/
$(document).ready(function () {
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');
      if (value == "all") {
        $('.filter').show('1000');
      }
      else {
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
      }
  // active
      $(".filter-button").removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
      }
    });
  });
})(jQuery);
