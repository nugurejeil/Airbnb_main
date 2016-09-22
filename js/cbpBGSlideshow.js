/**
 * cbpBGSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpBGSlideshow = (function() {

	var $slideshow = $( '#cbp-bislideshow' ),
		$items = $slideshow.children( 'li' ),
		itemsCount = $items.length,
		// $controls = $( '#cbp-bicontrols' ),
		navigation = {
			$navPrev : $( '.index_main_list_carousel_left_btn' ),
			$navNext : $( '.index_main_list_carousel_right_btn' ),
			// $navPlayPause : $controls.find( 'span.cbp-bipause' )
		},
		// current item´s index
		current = 0;
		// timeout
		// slideshowtime,
		// true if the slideshow is active
		// isSlideshowActive = false,
		// it takes 3.5 seconds to change the background image
		// interval = 3500;

	function init( config ) {

		// preload the images
		$slideshow.imagesLoaded( function() {
			
			if( Modernizr.backgroundsize ) {
				$items.each( function() {
					var $item = $( this );
					$item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
				} );
			}
			else {
				$slideshow.find( 'img' ).show();
				// for older browsers add fallback here (image size and centering)
			}
			// show first item
			$items.eq( current ).css( 'opacity', 1 );
			
			// initialize/bind the events
			initEvents();
			// start the slideshow
			// startSlideshow();

		} );
		
	}

	function initEvents() {

		// navigation.$navPlayPause.on( 'click', function() {

		// 	var $control = $( this );
		// 	if( $control.hasClass( 'cbp-biplay' ) ) {
		// 		$control.removeClass( 'cbp-biplay' ).addClass( 'cbp-bipause' );
		// 		startSlideshow();
		// 	}
		// 	else {
		// 		$control.removeClass( 'cbp-bipause' ).addClass( 'cbp-biplay' );
		// 		stopSlideshow();
		// 	}

		// } );

		navigation.$navPrev.on( 'click', function() { 
			navigate( 'prev' ); 
			// if( isSlideshowActive ) { 
			// 	startSlideshow(); 
			// } 
		} );
		navigation.$navNext.on( 'click', function() { 
			navigate( 'next' ); 
			// if( isSlideshowActive ) { 
			// 	startSlideshow(); 
			// }
		} );

	}

	function navigate( direction ) {

		// current item
		var $oldItem = $items.eq( current );
		
		if( direction === 'next' ) {
			current = current < itemsCount - 1 ? ++current : 0;
		}
		else if( direction === 'prev' ) {
			current = current > 0 ? --current : itemsCount - 1;
		}

		// new item
		var $newItem = $items.eq( current );

		// show / hide items
		$oldItem.css( 'opacity', 0 );
		
		$newItem.css( 'opacity', 1 );
		

	}

	// function startSlideshow() {

	// 	// isSlideshowActive = false;
	// 	clearTimeout( slideshowtime );
	// 	slideshowtime = setTimeout( function() {
	// 		navigate( 'next' );
	// 		startSlideshow();
	// 	}, interval );

	// }

	// function stopSlideshow() {
	// 	isSlideshowActive = false;
	// 	clearTimeout( slideshowtime );
	// }

	return { init : init };

})();

// scrollMagic



(function(global, $){
  "use strict";

  var controller = new ScrollMagic.Controller();
	var carousel_scene = new ScrollMagic.Scene({
		"triggerElement" : ".index_main_list_carousel",
		// "reverse" : false
	})
	.setClassToggle(".index_main_list_carousel", "fade-in")
	.addIndicators()
	.addTo(controller);


	var list_scene = new ScrollMagic.Scene({
		"triggerElement" : ".index_main_list",
		// "reverse" : false
	})
	.setClassToggle(".index_main_list_block", "fade-in")
	// .setClassToggle(".index_main_list_block", "item2")
	// .setClassToggle(".index_main_list_block", "item3")
	// .setClassToggle(".index_main_list_block", "item4")
	// .setClassToggle(".index_main_list_block", "item5")
	.addIndicators()
	.addTo(controller);
	
}(this, this.jQuery));



