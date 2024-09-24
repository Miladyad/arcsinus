if (!$('#error1').length) {    
	$('#field2687983').after('<div id="error1"></div>'); 
};
if (!$('#error2').length) {    
	$('#field2687984').after('<div id="error2"></div>'); 
};
if (!$('#error3').length) {    
	$('#field2687985').after('<div id="error3"></div>'); 
};

$("#field2687983").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
});
$("#field2687984").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
});
$("#field2687985").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
});


$("#field2687983").suggestions({
        token: "9a69485053e79fdc1c87703b5489154cccca7d70",
  type: "ADDRESS",
    count: 10,
  onSelect: function(suggestion) {
    console.log(suggestion);
    $('#error1').removeClass('error2');
    $('.submit').disabled = false;
    if ($('#error1').length) {
      $('#error1').empty();
    }
  },  
  onSelectNothing: function() {
    $('#error1').addClass('error2');
    $('#error1').html('<span>Выберите адрес из списка</span>');
    $('#field2687983').addClass('error2');
    $('.submit').disabled = true;
  }
});
$("#field2687984").suggestions({
	token: "9a69485053e79fdc1c87703b5489154cccca7d70",
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
    console.log(suggestion);
    $('#error2').removeClass('error2');
	$('.submit').disabled = false;
    if ($('#error2').length) {
      $('#error2').empty();
    }
  },  
  onSelectNothing: function() {
    $('#error2').addClass('error2');
    $('#error2').html('<span>Выберите адрес из списка</span>');
    $('#field2687984').addClass('error2');
	$('.submit').disabled = true;
  }
});
$("#field2687985").suggestions({
	token: "9a69485053e79fdc1c87703b5489154cccca7d70",
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
		console.log(suggestion);
		$('#error3').removeClass('error2');
        $('.submit').disabled = false;
		if ($('#error3').length) {
		  $('#error3').empty();
		}
  },  
  onSelectNothing: function() {
    $('#error3').addClass('error2');
    $('#error3').html('<span>Выберите адрес из списка</span>');
    $('#field2687985').addClass('error2');
	$('.submit').disabled = true;
  }
});