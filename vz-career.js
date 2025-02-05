$(document).ready(function(){
	$('.checkbox input').prop('disabled', true); 
	
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
  // Проверяем, достигнут ли конец блока с текстом
    $('.agreement-content').on('scroll', function() {
        let scrollTop = $(this).scrollTop();
        let scrollHeight = $(this).prop('scrollHeight');
        let outerHeight = $(this).outerHeight();

        if (scrollTop + outerHeight >= scrollHeight) {
            $('.agreement-button button').prop('disabled', false); // Разблокируем кнопку
        }
    });
  
  // Обработчик клика на кнопку
    $('.agreement-button button').on('click', function() {
        event.preventDefault();
        closeBox(); // Закрываем всплывающее окно
		$('.checkbox input').prop('disabled', false);
        $('.checkbox input').prop('checked', true); // Устанавливаем галочку в чекбоксе
    });
});
