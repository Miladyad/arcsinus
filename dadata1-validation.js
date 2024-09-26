$("#field2682865").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error'); 
});

var token = "9a69485053e79fdc1c87703b5489154cccca7d70";

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function showCountry(address) {
	if (address.country) {
		$("#field2699209").val(address.country);
	} else 
    $("#field2699209").val("-");
}

function showPostalCode(address) {
	if (address.postal_code) {
		$("#field2699208").val(address.postal_code);
	} else 
    $("#field2699208").val("-");
}

function showRegion(address) {
	if (address.region) {
		$("#field2699211").val(join([
			join([address.region_type, address.region], " "),
			join([address.area_type, address.area], " ")
		]));
	} else 
    $("#field2699211").val("-");
}

function showCity(address) {
	if (address.city) {
		$("#field2699218").val(address.city);
	} else 
    $("#field2699218").val("-");
}

function showSettlement(address) {
	if (address.settlement) {
		$("#field2699219").val(
			join([address.settlement_type, address.settlement], " ")
	  );
	} else 
	$("#field2699219").val("-");
}

function showStreet(address) {
	if (address.street) {
		$("#field2699220").val(
			join([address.street_type, address.street], " ")
		);
	} else 
    $("#field2699220").val("-");
}

function showHouse(address) {
	if (address.house) {
		$("#field2699221").val(address.house);
	} else 
    $("#field2699221").val("-");
}

function showHN(address) {
	if (address.block) {
		$("#field2699222").val(address.block);		
	} else 
    $("#field2699222").val("-");
}

function showFlat(address) {
	if (address.flat) {
		$("#field2699223").val(address.flat);
	} else 
    $("#field2699223").val("-");
}

function showRoom(address) {
	if (address.room) {
		$("#field2699319").val(address.room);
	} else 
    $("#field2699319").val("-");
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
		if ($('#error').length) {
			$('#error').remove();
		}
	},
	  
	onSearchError: function() {
		$("#error").text("Подсказки не работают"); 
	},
  
	onSelectNothing: function() {
		if (!$('#error').length) {
		   $('#field2682865').after('<div id="error" class="error"></div>'); 
		   $('#error').html('<span>Выберите адрес из списка</span>');
		};
		$('#field2682865').addClass('error');
	}
});

function showCompanySuggestion(suggestion) {
  console.log(suggestion);
  var data = suggestion.data;
  if (!data)
    return;

  if (data.name) {
    $("#field2699928").val(data.name.full_with_opf || "");
  }
  
  $("#field2699927").val(data.ogrn);
  $("#field2687954").val(data.inn);
}

// По ИНН ищем ОГРН и название организации полное в скрытые поля
$("#field2687954").suggestions({
  token: token,
  type: "PARTY",
  count: 5,
  minChars: 10,
  onSelect: showCompanySuggestion
});
