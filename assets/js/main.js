$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	new WOW().init();
	
	// ---- Active
    // $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
    // Start Accordion with symbols
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    	acc[i].addEventListener("click", function() {
    		this.classList.toggle("active");
    		var panel = this.nextElementSibling;
    		if (panel.style.maxHeight){
    			panel.style.maxHeight = null;
    		} else {
    			panel.style.maxHeight = panel.scrollHeight + "px";
    		} 
    	});
    }




// Start mixitup
var config = document.querySelector('.projectimg');
var mixer = mixitup(config);




    /* scrollUp Minimum setup */
    $(function () {
    	$.scrollUp();
    });

}(jQuery));

// $(document).ready(function(){
	// $('.popup').magnificPopup({
		// type: 'image',
		// gallery:{
			// enabled:true
		// }
	// });
// });
// $(document).ready(function(e) {

	// // live handler
	// lc_lightbox('.elem', {
		// wrap_class: 'lcl_fade_oc',
		// gallery : true,	
		// thumb_attr: 'data-lcl-thumb', 
		
		// skin: 'minimal',
		// radius: 0,
		// padding	: 0,
		// border_w: 0,
	// });	

// });