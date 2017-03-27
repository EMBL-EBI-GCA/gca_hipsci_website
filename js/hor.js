$(document).ready(function() {

	//get all link with class panel
	$('a.panel').click(function () {

                //reset and highlight the clicked link
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		//grab the current item, to be used in resize function
		current = $(this);
		
                //scroll it to the destination
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
                //cancel the link default behavior
		return false;
	});


	//resize all the items according to the new browser size
	$(window).resize(function () {
		
		//call the resizePanel function
		resizePanel();
	});
	
});