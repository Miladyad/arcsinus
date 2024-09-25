if (!$('#error').length) {    
   $('#field2682865').after('<div id="error"></div>'); 
};

$("#field2682865").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
});

// Замените на свой API-ключ
var token = "9a69485053e79fdc1c87703b5489154cccca7d70";

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function showCountry(address) {
  $("#field2699209").val(address.country);
}

function showPostalCode(address) {
  $("#field2699208").val(address.postal_code);
}

function showRegion(address) {
  $("#field2699211").val(join([
    join([address.region_type, address.region], " "),
    join([address.area_type, address.area], " ")
  ]));
}

function showCity(address) {
  $("#field2699218").val(
    join([address.city_type, address.city], " ")
  );
}

function showSettlement(address) {
  $("#field2699219").val(
    join([address.settlement_type, address.settlement], " ")
  );
}

function showStreet(address) {
  $("#field2699220").val(
    join([address.street_type, address.street], " ")
  );
}

function showHouse(address) {
  $("#field2699221").val(
    join([address.house_type, address.house], " ")
  );
}

function showHN(address) {
  $("#field2699222").val(
    join([address.block_type, address.block], " ")
  );
}

function showFlat(address) {
  $("#field2699223").val(
    join([address.flat_type, address.flat], " ")
  );
}

function showRoom(address) {
  $("#field2699319").val(
    join([address.room_type, address.room], " ")
  );
  console.log(join([address.room_type, address.room], " "));
}

$("#field2682865").suggestions({
	token: token,
	type: "ADDRESS",
	count: 10,

	onSelect: function(suggestion) {
	console.log(suggestion);
	var address = suggestion.data;
	showCountry(address);
	showPostalCode(address);
	showRegion(address);
	showCity(address);
	showSettlement(address);
	showStreet(address);
	showHouse(address);
	showHN(address);
	showFlat(address);
	showRoom(address);
	$('#error').removeClass('error2');
    if ($('#error').length) {
      $('#error').empty();
    }
  },
  
  onSelectNothing: function() {
    $('#error').addClass('error2');
    $('#error').html('<span>Выберите адрес из списка</span>');
    $('#field2682865').addClass('error2');
  }
});
