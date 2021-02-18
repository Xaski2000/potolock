$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: ["#FFFF33", "#CC6633", "#993333", "#CC6699", "# 9900CC", "#6600FF", "#0000CC", "#3399CC", "#339966", "#00CC00", "#99CC00", "#999933", "#fff", "#ccc","#777","#222"],
	maxSelectionSize: 22,
	color: "#FFCC66",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".color_layer-path").css("fill", a);
	}
});

$('#color-picker-for-wall').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: ["#FFFF33", "#CC6633", "#993333", "#CC6699", "# 9900CC", "#6600FF", "#0000CC", "#3399CC", "#339966", "#00CC00", "#99CC00", "#999933", "#fff", "#ccc","#777","#222"],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#6666FF",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".wall-path").css("fill", a);
	}
});

$('#color-picker-for-cover').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: ["#FFFF33", "#CC6633", "#993333", "#CC6699", "# 9900CC", "#6600FF", "#0000CC", "#3399CC", "#339966", "#00CC00", "#99CC00", "#999933", "#fff", "#ccc","#777","#333"],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#9999FF",
	showInitial: true,
	showInput: true,
	showButtons: false,
	disabled: true,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".cover-color-path").css("fill", a);
	}
});

// $('#cover-button').on('click', function () {
// 	if ($("#cover").css("display") == "none") {
// 		$('.checked-icon').css("display", "inline-block");
// 		$('.x-icon').css("display", "none");
// 	}
// });
// $('#cover-button').on('click', function () {
// 	if ($("#cover").css("display") == "block") {
// 		$(".x-icon").css("display", "inline-block");
// 		$('.checked-icon').css("display", "none");
// 	}
// });

$('#cover-button').on('click', function () {
	if ($("#cover").css("display") == "none") {
		$('.checked-icon').css("opacity", "1");
		$('.x-icon').css("opacity", "0");
	}
});
$('#cover-button').on('click', function () {
	if ($("#cover").css("display") == "block") {
		$(".x-icon").css("opacity", "1");
		$('.checked-icon').css("opacity", "0");
	}
});

$('#cover-button').on('click', function () {
	if ($(".cover").css("display") == 'none') {
		$(".cover").css("display", "inline-block");
		$(".cover-color").css("display", "inline-block");
		$(".cover-button").css("background-color", "#6666FF");
		$("#color-picker-for-cover").spectrum("enable");

	} else {
		$(".cover").css("display", "none");
		$(".cover-color").css("display", "none");
		$(".cover-button").css("background-color", "#9999FF");
		$("#color-picker-for-cover").spectrum("disable");
	}
});

$('#light-dots-button').on('click', function () {
	if ($(".light-dots").css("display") == 'none') {
		$(".light-dots").css("display", "inline-block");
		$(".light-dots-button").css("background-color", "#6666FF");
	} else {
		$(".light-dots").css("display", "none");
		$(".light-dots-button").css("background-color", "#9999FF");
	}
});

$('#light-button').on('click', function () {
	if ($(".light").css("display") == 'none') {
		$(".light").css("display", "inline-block");
		$(".light-button").css("background-color", "#6666FF");
	} else {
		$(".light").css("display", "none");
		$(".light-button").css("background-color", "#9999FF");
	}
});

$('#furniture-button').on('click', function () {
	if ($(".furniture").css("display") == 'none') {
		$(".furniture").css("display", "inline-block");
		$(".furniture-button").css("background-color", "#6666FF");
	} else {
		$(".furniture").css("display", "none");
		$(".furniture-button").css("background-color", "#9999FF");
	}
});

$('#radio-button').on('click', function () {
	if ($(".radio").css("display") == 'none') {
		$(".radio").css("display", "inline-block");
		$(".radio-color").css("display", "inline-block");
		$(".radio-button").css("background-color", "#6666FF");
	} else {
		$(".radio").css("display", "none");
		$(".radio-color").css("display", "none");
		$(".radio-button").css("background-color", "#9999FF");
	}
});