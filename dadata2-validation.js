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
	if (address.postal_code) {
		$("#field2699412").val(address.postal_code);
	} else 
		$("#field2699412").val("-");
}

function showCountry1(address) {
	if (address.country) {
		$("#field2699414").val(address.country);
	} else 
		$("#field2699414").val("-");
}

function showRegion1(address) {
	if (address.region) {
		$("#field2699415").val(join([
			join([address.region_type, address.region], " "),
			join([address.area_type, address.area], " ")
		  ]));
	} else 
		$("#field2699415").val("-");
}

function showCity1(address) {
	if (address.city) {
		$("#field2699416").val(address.city);
	} else 
		$("#field2699416").val("-");
}

function showSettlement1(address) {
	if (address.settlement) {
		$("#field2699417").val(address.settlement);
	} else 
		$("#field2699417").val("-");
}

function showSettlementType1(address) {
	if (address.settlement_type) {
		$("#field2699418").val(address.settlement_type);
	} else 
		$("#field2699418").val("-");
}

function showStreet1(address) {
	if (address.street) {
		$("#field2699419").val(address.street);
	} else 
		$("#field2699419").val("-");
}

function showStreetType1(address) {
	if (address.street_type) {
		$("#field2699420").val(address.street_type);
	} else 
		$("#field2699420").val("-");
}

function showHouse1(address) {
	if (address.house) {
		$("#field2699421").val(address.house);
	} else 
		$("#field2699421").val("-");
}

function showHouseType1(address) {
	if (address.house_type) {
		$("#field2699422").val(address.house_type);
	} else 
		$("#field2699422").val("-");
}

function showHN1(address) {
	if (address.block) {
		$("#field2699424").val(address.block);
	} else 
		$("#field2699424").val("-");
}

function showHNType1(address) {
	if (address.block_type) {
		$("#field2699425").val(address.block_type);
	} else 
		$("#field2699425").val("-");
}

function showFlat1(address) {
	if (address.flat) {
		$("#field2699426").val(address.flat);
	} else 
		$("#field2699426").val("-");
}
function showRoom1(address) {
	if (address.room) {
		$("#field2699438").val(address.room);
	} else 
		$("#field2699438").val("-");  
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
	onSearchError: function() {
		$("#error1").text("Подсказки не работают"); 
	},
	onSelectNothing: function() {
		if ($('#field2687983').val()) {
			$('#error1').addClass('error2');
			$('#error1').html('<span>Выберите адрес из списка</span>');
			$('#field2682865').addClass('error2');
		} else {
			$('#error1').empty();
		}
	}
});

// второе поле адреса

function showCountry2(address) {
	if (address.country) {
		$("#field2699453").val(address.country);
	} else 
		$("#field2699453").val("-");
}

function showPostalCode2(address) {
	if (address.postal_code) {
		$("#field2699452").val(address.postal_code);
	} else 
		$("#field2699452").val("-");
}

function showRegion2(address) {
	if (address.region) {
		 $("#field2699455").val(join([
			join([address.region_type, address.region], " "),
			join([address.area_type, address.area], " ")
		  ]));
	} else 
		$("#field2699455").val("-");
}

function showCity2(address) {
	if (address.city) {
		$("#field2699456").val(address.city);
	} else 
		$("#field2699456").val("-");
}

function showSettlement2(address) {
	if (address.settlement) {
		$("#field2699457").val(address.settlement);
	} else 
		$("#field2699457").val("-");
}

function showSettlementType2(address) {
	if (address.settlement_type) {
		$("#field2699459").val(address.settlement_type);
	} else 
		$("#field2699459").val("-");
}

function showStreet2(address) {
	if (address.street) {
		$("#field2699451").val(address.street);
	} else 
		$("#field2699451").val("-");
}

function showStreetType2(address) {
	if (address.street_type) {
		$("#field2699450").val(address.street_type);
	} else 
		$("#field2699450").val("-");
}

function showHouse2(address) {
	if (address.house) {
		$("#field2699449").val(address.house);
	} else 
		$("#field2699449").val("-");  
}

function showHouseType2(address) {
	if (address.house_type) {
		$("#field2699448").val(address.house_type);
	} else 
		$("#field2699448").val("-");
}

function showHN2(address) {
	if (address.block) {
		$("#field2699447").val(address.block);
	} else 
		$("#field2699447").val("-");
}

function showHNType2(address) {
	if (address.block_type) {
		$("#field2699446").val(address.block_type);
	} else 
		$("#field2699446").val("-");
}

function showFlat2(address) {
	if (address.flat) {
		$("#field2699445").val(address.flat);
	} else 
		$("#field2699445").val("-");
}

function showRoom2(address) {
	if (address.room) {
		$("#field2699444").val(address.room);
	} else 
		$("#field2699444").val("-");
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
	onSearchError: function() {
		$("#error2").text("Подсказки не работают"); 
	},
  onSelectNothing: function() {
	  if ($('#field2687984').val()) {
			$('#error2').addClass('error2');
			$('#error2').html('<span>Выберите адрес из списка</span>');
			$('#field2687984').addClass('error2');
		} else {
			$('#error2').empty();
		}
  }
});

// третье поле адреса

function showCountry3(address) {
	if (address.country) {
		$("#field2699509").val(address.country);
	} else 
		$("#field2699509").val("-");
}

function showPostalCode3(address) {
	if (address.postal_code) {
		$("#field2699461").val(address.postal_code);
	} else 
		$("#field2699461").val("-");
}

function showRegion3(address) {
	if (address.region) {
		 $("#field2699510").val(join([
			join([address.region_type, address.region], " "),
			join([address.area_type, address.area], " ")
		  ]));
	} else 
		$("#field2699510").val("-");
}

function showCity3(address) {
	if (address.city) {
		$("#field2699511").val(address.city);
	} else 
		$("#field2699511").val("-");
}

function showSettlement3(address) {
	if (address.settlement) {
		$("#field2699512").val(address.settlement);
	} else 
		$("#field2699512").val("-");
}

function showSettlementType3(address) {
	if (address.settlement_type) {
		$("#field2699513").val(address.settlement_type);
	} else 
		$("#field2699513").val("-");
}

function showStreet3(address) {
	if (address.street) {
		$("#field2699514").val(address.street);
	} else 
		$("#field2699514").val("-");
}

function showStreetType3(address) {
	if (address.street_type) {
		$("#field2699515").val(address.street_type);
	} else 
		$("#field2699515").val("-");
}

function showHouse3(address) {
	if (address.house) {
		$("#field2699516").val(address.house);
	} else 
		$("#field2699516").val("-");
}

function showHouseType3(address) {
	if (address.house_type) {
		$("#field2699517").val(address.house_type);
	} else 
		$("#field2699517").val("-");
}

function showHN3(address) {
	if (address.block) {
		$("#field2699518").val(address.block);
	} else 
		$("#field2699518").val("-");
}

function showHNType3(address) {
	if (address.block_type) {
		$("#field2699519").val(address.block_type);
	} else 
		$("#field2699519").val("-");
}

function showFlat3(address) {
	if (address.flat) {
		$("#field2699522").val(address.flat);
	} else 
		$("#field2699522").val("-");
}
function showRoom3(address) {
	if (address.room) {
		$("#field2699520").val(address.room);
	} else 
		$("#field2699520").val("-");
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
	onSearchError: function() {
		$("#error3").text("Подсказки не работают"); 
	},
  onSelectNothing: function() {
	if ($('#field2687985').val()) {
		$('#error3').addClass('error2');
		$('#error3').html('<span>Выберите адрес из списка</span>');
		$('#field2687985').addClass('error2');
	} else {
		$('#error3').empty();
	}
  }
});

// Кодирование в base64 файлов и получение информации о файлах

const prepareFileHandler = (nameId, extId, base64Id) => (evt) => {
	const files = evt.target.files
	const file = files[0]

	// show filename and extention
	const [filename, fileext] = file.name.split('.')

    $(nameId).val(filename)
    $(extId).val(fileext)
	console.log(filename);
	console.log(fileext);
  
    // base64 encode
    if (files && file) {
        const reader = new FileReader()
        reader.onload = (readerEvt) => {
            const binaryString = readerEvt.target.result
            $(base64Id).val(btoa(binaryString))
        }
        reader.readAsBinaryString(file)
		return;
    }
	return;
}

const addFileUploadListener = (elementId, inputIds) => {
	console.log(elementId);
    document.getElementById(elementId)
      .addEventListener('change',  prepareFileHandler(...inputIds), false);
	return;
}

if (window.File && window.FileReader && window.FileList && window.Blob) {
    /*addFileUploadListener('field2695274', ["#field2702238","#field2702240","#field2702241"]) //ЮЛ Карточка
    addFileUploadListener('field2687993', ["#field2706011","#field2706012","#field2706014"]) // Устав
	addFileUploadListener('field2687994', ["#field2706019","#field2706021","#field2706023"]) // Свидетельство о государственной регистрации
	addFileUploadListener('field2687995', ["#field2706026","#field2706027","#field2706028"]) // Решение о создании
	addFileUploadListener('field2687996', ["#field2706030","#field2706031","#field2706032"]) // Свидетельство о постановке на учёт в налоговом органе
	addFileUploadListener('field2687997', ["#field2706034","#field2706035","#field2706036"]) // Приказ о вступлении в должность действующего руководителя юридического лица
	addFileUploadListener('field2687998', ["#field2706064","#field2706065","#field2706091"]) // Решение или протокол об избрании исполнительного органа
	addFileUploadListener('field2687999', ["#field2706093","#field2706134","#field2706153"]) // Доверенность, если подписан не исполнительный орган
	addFileUploadListener('field2688000', ["#field2706170","#field2706171","#field2706172"]) // Справка об отсутствии задолженности по налогам и сборам
	addFileUploadListener('field2688001', ["#field2706215","#field2706216","#field2706217"]) // Бухгалтерский баланс
	addFileUploadListener('field2688003', ["#field2706226","#field2706227","#field2706228"]) // Налоговые декларации
	addFileUploadListener('field2688002', ["#field2706230","#field2706231","#field2706232"]) // Договор аренды
	*/
	addFileUploadListener('field2701270', ["#field2706277","#field2706278","#field2706279"]) //ФЛ Карточка
	/*addFileUploadListener('field2695275', ["#field2706281","#field2706282","#field2706283"]) // Копия паспорта
	addFileUploadListener('field2695276', ["#field2706286","#field2706288","#field2706290"]) // Свидетельство о государственной регистрации
	addFileUploadListener('field2701271', ["#field2706293","#field2706294","#field2706300"]) // Свидетельство о постановке на учёт в налоговом органе
	addFileUploadListener('field2695277', ["#field2706302","#field2706305","#field2706309"]) // Доверенность, если подписант не ИП
	addFileUploadListener('field2701272', ["#field2706311","#field2706315","#field2706316"]) // Справка об отсутствии задолженности
	addFileUploadListener('field2695282', ["#field2706319","#field2706320","#field2706321"]) // Документ, подтверждающий налогообложение
	addFileUploadListener('field2696821', ["#field2706325","#field2706326","#field2706327"]) // Налоговые декларации НДС
	addFileUploadListener('field2695283', ["#field2706331","#field2706333","#field2706334"]) // Документ, подтверждающий наличие штата сотрудников*/
} else {
      console.log('The File APIs are not fully supported in this browser.');
}
