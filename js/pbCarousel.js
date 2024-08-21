function slideCarousel(direction) {
	var templateSize = 367.6 // technically 192px, but accounting for 16px margin
	var templates = $('#templates');
	// create variable for width
	var templateWidth = 0 
	// add width of each template tile
	$('#templates li').each(function() { 
		templateWidth += $(this).outerWidth( true );
	});
	// the amount we want to scroll the templates
	var paginationSize = (templateSize * 3) 
	
	// for sliding right
	if (direction == "right") { 
		
			// get the current position of the templates
			var currentTemplatePos = parseInt(templates.css('left')) 
			// the new position of the templates after shifting
			var newTemplatePos = currentTemplatePos - paginationSize
			
			// if the arrow is visible
			if ($('#carousel-right').hasClass('showing')) {
				// if the templates are at zer state
				if (currentTemplatePos == 0) {
					// move them a little farther than pagination so they're not covered by the arrows
					newTemplatePos = currentTemplatePos - paginationSize + 48
				}
				// move templates to the newly defined position
				templates.css("left", newTemplatePos + "px");
				// if templates have been moved
				if ( newTemplatePos < 0) {
					// show the left arrow
					$('#carousel-left').addClass('showing');
				}
				// if we're on the last "page" of templates
				if (-(newTemplatePos) > (templateWidth - paginationSize)) {
					// hide the right arrow
					$('#carousel-right').removeClass('showing');
				}
			// if the arrow isn't visible
			} else {
				// dont' do anything
				return
			}
	} 
	
	// for sliding left
	if (direction == "left") {
		
			var currentTemplatePos = parseInt(templates.css('left'))
			var newTemplatePos = currentTemplatePos + (templateSize * 3)
			
			// if left arrow is visible
			if ($('#carousel-left').hasClass('showing')) {
				// if the template "page" is close to zero state
				if (currentTemplatePos > -(templateSize * 3)) {
					// set it to zero state
					templates.css("left", 0 + "px");
				} else {
					// otherwise navigate to new position
					templates.css("left", newTemplatePos + "px");
				}
				// if the templates are at zero state
				if ( newTemplatePos >= 0) {
					// show the right arrow
					$('#carousel-right').addClass('showing');
					// hide the left arrow
					$('#carousel-left').removeClass('showing');
				}
				// if not on the last "page" of the templates
				if (-(newTemplatePos) < (templateWidth - paginationSize)) {
					// show the right arrow again
					$('#carousel-right').addClass('showing');
				}
			// if left arrow isn't visible
			} else {
				// do nothing
				return
			}
	} 
	
};

$('#carousel-left').click(function() {
	slideCarousel("left");
});

$('#carousel-right').click(function() {
	slideCarousel("right");
});