if (!$('#error').length) {    
   $('#field2682865').after('<div id="error"></div>'); 
};

$("#field2682865").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
});


$("#field2682865").suggestions({
	token: "9a69485053e79fdc1c87703b5489154cccca7d70",
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
    console.log(suggestion);
    $('#error').removeClass('error2');
	$('.submit').disabled = false;
    if ($('#error').length) {
      $('#error').empty();
    }
  },
  
  onSelectNothing: function() {
    $('#error').addClass('error2');
    $('#error').html('<span>Выберите адрес из списка</span>');
    $('#field2682865').addClass('error2');
	$('.submit').disabled = true;
  }
  
    });