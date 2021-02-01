$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showInput: true,
	showInitial: true,
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [ ],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	move: function(color) {
				let a = color.toHexString();
				// document.getElementsByClassName("color_layer-path").style.fill = a;
				$(".color_layer-path").css("fill", a);
				document.getElementsByClassName('sp-original-input-container')[0].style.borderColor = a;
			}
});

$('#color-picker-for-wall').spectrum({
	type: "component",
	preferredFormat: "hex",
	showInput: true,
	showInitial: true,
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [ ],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	move: function(color) {
				let a = color.toHexString();
				// document.getElementsByClassName("color_layer-path").style.fill = a;
				$(".wall-path").css("fill", a);
				document.getElementsByClassName('sp-original-input-container')[1].style.borderColor = a;
			}
});

$('#checkbox_light').on('click', function () {
	if ( $(this).is(':checked') ) {
		$(".light").css("display", "inline-block");
		// document.getElementById("light").style.display = "inline-block";
	} else {
		$(".light").css("display", "none");
		// document.getElementById("light").style.display = "none";
	}
});