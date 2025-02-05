$(document).ready(function(){
	$(".agreement-link a").on("click", function(){
		$(".agreement-block").css("display", "block");
		$(".agreement-block").animate({"opacity": "1.0"}, 300);
    
	});

	$(".agreement-close").on("click", function(){
		closeBox();
	});

	function closeBox(){
		$(".agreement-block").animate({"opacity": "0"}, 300, function(){
			$(".agreement-block").css("display", "none");
		});
	}
});
