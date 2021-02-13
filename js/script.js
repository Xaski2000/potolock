$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	color: "#ffffff",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".color_layer-path").css("fill", a);
		document.getElementsByClassName('sp-original-input-container')[0].style.borderColor = a;
	}
});

$('#color-picker-for-wall').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	showInitial: true,
	showInput: true,
	showButtons: false,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".wall-path").css("fill", a);
		document.getElementsByClassName('sp-original-input-container')[1].style.borderColor = a;
	}
});

$('#color-picker-for-cover').spectrum({
	type: "component",
	preferredFormat: "hex",
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	showInitial: true,
	showInput: true,
	showButtons: false,
	disabled: true,
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".cover-color-path").css("fill", a);
		document.getElementsByClassName('sp-original-input-container')[2].style.borderColor = a;
	}
});

$('#color-picker-for-cover').on('mouseover', function () {
	if ($(".cover").css("display") == 'none') {
		$('.cover-button').css('background-color', '#ff3359');
	}
});

$('#color-picker-for-cover').on('mouseout', function () {
	if ($(".cover").css("display") == 'none') {
		$('.cover-button').css('background-color', '#999');
	}
});

$('#cover-button').on('click', function () {
	if ($(".cover").css("display") == 'none') {
		$(".cover").css("display", "inline-block");
		$(".cover-color").css("display", "inline-block");
		$(".cover-button").css("background-color", "#bbb");
		$("#color-picker-for-cover").spectrum("enable");

	} else {
		$(".cover").css("display", "none");
		$(".cover-color").css("display", "none");
		$(".cover-button").css("background-color", "#999");
		$("#color-picker-for-cover").spectrum("disable");
	}
});

$('#light-dots-button').on('click', function () {
	if ($(".light-dots").css("display") == 'none') {
		$(".light-dots").css("display", "inline-block");
		$(".light-dots-button").css("background-color", "#bbb");
	} else {
		$(".light-dots").css("display", "none");
		$(".light-dots-button").css("background-color", "#999");
	}
});

$('#light-button').on('click', function () {
	if ($(".light").css("display") == 'none') {
		$(".light").css("display", "inline-block");
		$(".light-button").css("background-color", "#bbb");
	} else {
		$(".light").css("display", "none");
		$(".light-button").css("background-color", "#999");
	}
});

$('#furniture-button').on('click', function () {
	if ($(".furniture").css("display") == 'none') {
		$(".furniture").css("display", "inline-block");
		$(".furniture-button").css("background-color", "#bbb");
	} else {
		$(".furniture").css("display", "none");
		$(".furniture-button").css("background-color", "#999");
	}
});

$('#radio-button').on('click', function () {
	if ($(".radio").css("display") == 'none') {
		$(".radio").css("display", "inline-block");
		$(".radio-color").css("display", "inline-block");
		$(".radio-button").css("background-color", "#bbb");
	} else {
		$(".radio").css("display", "none");
		$(".radio-color").css("display", "none");
		$(".radio-button").css("background-color", "#999");
	}
});


// Выбираем целевой элемент
var target = document.getElementById('wrapper');

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
	attributes: true,
	childList: true,
	subtree: true
};

// Функция обратного вызова при срабатывании мутации
const callback = function (mutationsList, observer) {
	for (let mutation of mutationsList) {
		if (mutation.type === 'childList') {
			console.log('A child node has been added or removed.');
		} else if (mutation.type === 'attributes') {
			console.log('The ' + mutation.attributeName + ' attribute was modified.');
		}
	}
};

// Создаем экземпляр наблюдателя с указанной функцией обратного вызова
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(target, config);