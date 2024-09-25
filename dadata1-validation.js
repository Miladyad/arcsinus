if (!$('#error').length) {    
   $('#field2682865').after('<div id="error"></div>'); 
};

$("#field2682865").on( "click", function( event ) {
	event.preventDefault();
    $(this).removeClass('error2'); 
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
