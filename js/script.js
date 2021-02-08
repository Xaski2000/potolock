$('#color-picker').spectrum({
	type: "component",
	preferredFormat: "hex",
	showInput: true,
	showInitial: true,
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
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
	showInput: true,
	showInitial: true,
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
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
	showInput: true,
	showInitial: true,
	showAlpha: false,
	allowEmpty: true,
	showPalette: true,
	showSelectionPalette: true,
	palette: [],
	maxSelectionSize: 22,
	cancelText: "Отмена",
	chooseText: "Выбрать",
	color: "#ffffff",
	move: function (color) {
		let a = color.toHexString();
		// document.getElementsByClassName("color_layer-path").style.fill = a;
		$(".cover-color-path").css("fill", a);
		document.getElementsByClassName('sp-original-input-container')[2].style.borderColor = a;
	}
});

// let width = $(".wrapper").css('width');
// console.log(width);



// var target = document.getElementById('wrapper');

// // Конфигурация observer (за какими изменениями наблюдать)
// const config = {
// 	attributes: true,
// 	childList: true,
// 	subtree: true
// };

// // Функция обратного вызова при срабатывании мутации
// const callback = function (mutationsList, observer) {
// 	for (let mutation of mutationsList) {
// 		if (mutation.type === 'attributes') {
// 			console.log('The ' + mutation.attributeName + ' attribute was modified.');
// 		}
// 	}
// };

// // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
// const observer = new MutationObserver(callback);

// // Начинаем наблюдение за настроенными изменениями целевого элемента
// observer.observe(target, config);


$('#light-dots-button').on('click', function () {
	if ($(".light-dots").css("display") == 'none') {
		$(".light-dots").css("display", "inline-block");
		$(".light-dots-button").css("background-color", "#337788");
	} else {
		$(".light-dots").css("display", "none");
		$(".light-dots-button").css("background-color", "#773388");
	}
});

$('#furniture-button').on('click', function () {
	if ($(".furniture").css("display") == 'none') {
		$(".furniture").css("display", "inline-block");
	} else {
		$(".furniture").css("display", "none");
	}
});

$('#cover-button').on('click', function () {
	if ($(".cover").css("display") == 'none') {
		$(".cover").css("display", "inline-block");
		$(".cover-color").css("display", "inline-block");
	} else {
		$(".cover").css("display", "none");
		$(".cover-color").css("display", "none");
	}
});