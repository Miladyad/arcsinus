$(document).ready(function(){
	$('.checkbox input').prop('disabled', true); 
	var checkboxContent = $(".checkbox").html;
	
	// show error field under checkbox on click
	$(".checkbox label").on("click", function(){		
		$(".checkbox").html(checkboxContent + "<div class='error'>Пожалуйста, прочитайте текст соглашения.</div>");
		$(".checkbox").addClass("error");    
	});
	
	// show modal window
	$(".agreement-link a").on("click", function(){
		$(".agreement-block").css("display", "block");
		$(".agreement-block").animate({"opacity": "1.0"}, 300);    
	});
	
	// close modal window
	$(".agreement-close").on("click", function(){
		closeBox();
	});
	function closeBox(){
		$(".agreement-block").animate({"opacity": "0"}, 300, function(){
			$(".agreement-block").css("display", "none");
		});
	}
	
  // agreement text is read
    $('.agreement-content').on('scroll', function() {
        let scrollTop = $(this).scrollTop();
        let scrollHeight = $(this).prop('scrollHeight');
        let outerHeight = $(this).outerHeight();

        if (scrollTop + outerHeight >= scrollHeight) {
            $('.agreement-button button').prop('disabled', false); // unblocking agreement button
        }
    });
  
  // Checking agreement checkbox, removing error
    $('.agreement-button button').on('click', function() {
        event.preventDefault();
        closeBox(); 
		$(".checkbox").html(checkboxContent);
		$(".checkbox").removeClass("error");
		$('.checkbox input').prop('disabled', false);
        $('.checkbox input').prop('checked', true); 
		$('.checkbox input').trigger('click');
    });
});
