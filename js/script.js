// $("#color_picker").spectrum ({
// 	palette: [],
// 	showPalette: true,
// 	maxSelectionSize: 20,
// 	showInput: true,
// 	showInitial: true,
// 	allowEmpty:true,
// 	// color: "#ffffff",
// 	move: function(color) {
// 		let a = $("#color_picker").spectrum('get').toHexString();
// 		document.getElementById("color_layer-path").style.fill = a;
//    }
// });

$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showInput: "true",
	showInitial: "true",
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [ ],
	maxSelectionSize: 20,
	clickoutFiresChange: false,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	move: function(color) {
				let a = color.toHexString();
				document.getElementById("color_layer-path").style.fill = a;
			}
 });

$('#checkbox_light').on('click', function () {
	if ( $(this).is(':checked') ) {
		document.getElementById("light").style.display = "inline-block";
	} else {
		document.getElementById("light").style.display = "none";
	}
});