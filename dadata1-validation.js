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
