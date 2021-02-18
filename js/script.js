$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: ["#FFFF33", "#CC6633", "#993333", "#CC6699", "# 9900CC", "#6600FF", "#0000CC", "#3399CC", "#339966", "#00CC00", "#99CC00", "#999933", "#fff", "#ccc","#777","#222"],
	maxSelectionSize: 22,
	color: "#fff",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
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
	color: "#ffffbf",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
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
	color: "#fff",
	showInitial: true,
	showInput: true,
	showButtons: false,
	// disabled: true,
	show: function(color) {
		let a = color.toHexString();
		$('#cover').css("display", "inline-block");
		$(".cover-color").css("display", "inline-block");
		$('.checked-icon').css("opacity", "1");
		$('.x-icon').css("opacity", "0");
		$(".cover-color-path").css("fill", a);
		$(".cover-button").css("background-color", "#54bfc3");
	},
	move: function (color) {
		let a = color.toHexString();
		$(".cover-color-path").css("fill", a);
	}
});

// $('#cover-button').on('click', function () {
// 	if ($("#cover").css("display") == "none") {
// 		$('.checked-icon1').css("opacity", "1");
// 		$('.x-icon1').css("opacity", "0");
// 	}
// });
// $('#cover-button').on('click', function () {
// 	if ($("#cover").css("display") == "block") {
// 		$(".x-icon1").css("opacity", "1");
// 		$('.checked-icon1').css("opacity", "0");
// 	}
// });

$('#cover-button').on('click', function () {
	if ($(".cover").css("display") == 'none') {
		$(".cover").css("display", "inline-block");
		$(".cover-color").css("display", "inline-block");
		$(".cover-button").css("background-color", "#54bfc3");
		$('.checked-icon1').css("opacity", "1");
		$('.x-icon1').css("opacity", "0");

	} else {
		$(".cover").css("display", "none");
		$(".cover-color").css("display", "none");
		$(".cover-button").css("background-color", "#457b9d");
		$(".x-icon1").css("opacity", "1");
		$('.checked-icon1').css("opacity", "0");
	}
});

$('#light-dots-button').on('click', function () {
	if ($(".light-dots").css("display") == 'none') {
		$(".light-dots").css("display", "inline-block");
		$(".light-dots-button").css("background-color", "#54bfc3");
		$('.checked-icon2').css("opacity", "1");
		$('.x-icon2').css("opacity", "0");
	} else {
		$(".light-dots").css("display", "none");
		$(".light-dots-button").css("background-color", "#457b9d");
		$(".x-icon2").css("opacity", "1");
		$('.checked-icon2').css("opacity", "0");
	}
});

$('#light-button').on('click', function () {
	if ($(".light").css("display") == 'none') {
		$(".light").css("display", "inline-block");
		$(".light-button").css("background-color", "#54bfc3");
		$('.checked-icon3').css("opacity", "1");
		$('.x-icon3').css("opacity", "0");
	} else {
		$(".light").css("display", "none");
		$(".light-button").css("background-color", "#457b9d");
		$(".x-icon3").css("opacity", "1");
		$('.checked-icon3').css("opacity", "0");
	}
});

$('#furniture-button').on('click', function () {
	if ($(".furniture").css("display") == 'none') {
		$(".furniture").css("display", "inline-block");
		$(".furniture-button").css("background-color", "#54bfc3");
		$('.checked-icon4').css("opacity", "1");
		$('.x-icon4').css("opacity", "0");
	} else {
		$(".furniture").css("display", "none");
		$(".furniture-button").css("background-color", "#457b9d");
		$(".x-icon4").css("opacity", "1");
		$('.checked-icon4').css("opacity", "0");
	}
});

$('#radio-button').on('click', function () {
	if ($(".radio").css("display") == 'none') {
		$(".radio").css("display", "inline-block");
		$(".radio-color").css("display", "inline-block");
		$(".radio-button").css("background-color", "#54bfc3");
		$('.checked-icon5').css("opacity", "1");
		$('.x-icon5').css("opacity", "0");
	} else {
		$(".radio").css("display", "none");
		$(".radio-color").css("display", "none");
		$(".radio-button").css("background-color", "#457b9d");
		$(".x-icon5").css("opacity", "1");
		$('.checked-icon5').css("opacity", "0");
	}
});