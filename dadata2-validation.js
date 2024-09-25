// Добавляем поле для вывода ошибок, если адрес не выбран из выпадающего списка
if (!$('#error1').length) {    
	$('#field2687983').after('<div id="error1"></div>'); 
};
if (!$('#error2').length) {    
	$('#field2687984').after('<div id="error2"></div>'); 
};
if (!$('#error3').length) {    
	$('#field2687985').after('<div id="error3"></div>'); 
};

// При клике на input адреса убираем контент и класс поля ошибки
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

var token = "9a69485053e79fdc1c87703b5489154cccca7d70";

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

// при клике на поле адреса, выводим 10 вариантов адреса, убирам ошибку, а если ничего не выбрано - выводим ошибку
// первое поле адреса

function showPostalCode1(address) {
  $("#field2699412").val(address.postal_code);
}

function showCountry1(address) {
  $("#field2699414").val(address.country);
}

function showRegion1(address) {
  $("#field2699415").val(join([
    join([address.region_type, address.region], " "),
    join([address.area_type, address.area], " ")
  ]));
}

function showCity1(address) {
  $("#field2699416").val(address.city);
}

function showSettlement1(address) {
  $("#field2699417").val(address.settlement);
}

function showSettlementType1(address) {
  $("#field2699418").val(address.settlement_type);
}

function showStreet1(address) {
  $("#field2699419").val(address.street);
}

function showStreetType1(address) {
  $("#field2699420").val(address.street_type);
}

function showHouse1(address) {
  $("#field2699421").val(address.house);
}

function showHouseType1(address) {
  $("#field2699422").val(address.house_type);
}

function showHN1(address) {
  $("#field2699424").val(address.block);
}

function showHNType1(address) {
  $("#field2699425").val(address.block_type);
}

function showFlat1(address) {
  $("#field2699426").val(address.flat);
}
function showRoom1(address) {
  $("#field2699438").val(address.room);
}

$("#field2687983").suggestions({
	token: token,
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
		console.log(suggestion);
		var address = suggestion.data;
		showPostalCode1(address);
		showCountry1(address);
		showRegion1(address);
		showCity1(address);
		showSettlement1(address);
		showSettlementType1(address);
		showStreet1(address);
		showStreetType1(address);
		showHouse1(address);
		showHouseType1(address);
		showHN1(address);
		showHNType1(address);
		showFlat1(address); 
		showRoom1(address);
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

// второе поле адреса

function showCountry2(address) {
  $("#field2699453").val(address.country);
}

function showPostalCode2(address) {
  $("#field2699452").val(address.postal_code);
}

function showRegion2(address) {
  $("#field2699455").val(join([
    join([address.region_type, address.region], " "),
    join([address.area_type, address.area], " ")
  ]));
}

function showCity2(address) {
  $("#field2699456").val(address.city);
}

function showSettlement2(address) {
  $("#field2699457").val(address.settlement);
}

function showSettlementType2(address) {
  $("#field2699459").val(address.settlement_type);
}

function showStreet2(address) {
  $("#field2699451").val(address.street);
}

function showStreetType2(address) {
  $("#field2699450").val(address.street_type);
}

function showHouse2(address) {
  $("#field2699449").val(address.house);
}

function showHouseType2(address) {
  $("#field2699448").val(address.house_type);
}

function showHN2(address) {
  $("#field2699447").val(address.block);
}

function showHNType2(address) {
  $("#field2699446").val(address.block_type);
}

function showFlat2(address) {
  $("#field2699445").val(address.flat);
}
function showRoom2(address) {
  $("#field2699444").val(address.room);
}

$("#field2687984").suggestions({
	token: token,
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
    console.log(suggestion);
	var address = suggestion.data;
		showPostalCode2(address);
		showCountry2(address);
		showRegion2(address);
		showCity2(address);
		showSettlement2(address);
		showSettlementType2(address);
		showStreet2(address);
		showStreetType2(address);
		showHouse2(address);
		showHouseType2(address);
		showHN2(address);
		showHNType2(address);
		showFlat2(address); 
		showRoom2(address);
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

// третье поле адреса

function showCountry3(address) {
  $("#field2699509").val(address.country);
}

function showPostalCode3(address) {
  $("#field2699461").val(address.postal_code);
}

function showRegion3(address) {
  $("#field2699510").val(join([
    join([address.region_type, address.region], " "),
    join([address.area_type, address.area], " ")
  ]));
}

function showCity3(address) {
  $("#field2699511").val(address.city);
}

function showSettlement3(address) {
  $("#field2699512").val(address.settlement);
}

function showSettlementType3(address) {
  $("#field2699513").val(address.settlement_type);
}

function showStreet3(address) {
  $("#field2699514").val(address.street);
}

function showStreetType3(address) {
  $("#field2699515").val(address.street_type);
}

function showHouse3(address) {
  $("#field2699516").val(address.house);
}

function showHouseType3(address) {
  $("#field2699517").val(address.house_type);
}

function showHN3(address) {
  $("#field2699518").val(address.block);
}

function showHNType3(address) {
  $("#field2699519").val(address.block_type);
}

function showFlat3(address) {
  $("#field2699522").val(address.flat);
}
function showRoom3(address) {
  $("#field2699520").val(address.room);
}

$("#field2687985").suggestions({
	token: token,
	type: "ADDRESS",
    count: 10,
	onSelect: function(suggestion) {
		console.log(suggestion);
		var address = suggestion.data;
		showPostalCode3(address);
		showCountry3(address);
		showRegion3(address);
		showCity3(address);
		showSettlement3(address);
		showSettlementType3(address);
		showStreet3(address);
		showStreetType3(address);
		showHouse3(address);
		showHouseType3(address);
		showHN3(address);
		showHNType3(address);
		showFlat3(address); 
		showRoom3(address);
		$('#error3').removeClass('error2');
		if ($('#error3').length) {
		  $('#error3').empty();
		}
  },  
  onSelectNothing: function() {
    $('#error3').addClass('error2');
    $('#error3').html('<span>Выберите адрес из списка</span>');
    $('#field2687985').addClass('error2');
  }
});
