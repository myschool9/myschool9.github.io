	// Button -----------------------------------
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].type = 'button';
	buttons[i].id = 'button' + String(i + 1);
}
let isButton = document.getElementById('button1') != null;
if ('function' == typeof window.task1 && isButton) {
	buttons[0].addEventListener('click', task1);
}
if ('function' == typeof window.task2 && document.getElementById('button2') != null) {
	buttons[1].addEventListener('click', task2);
}
if ('function' == typeof window.task3 && document.getElementById('button3') != null) {
	buttons[2].addEventListener('click', task3);
}

	// Input ------------------------------------
const radios = document.querySelectorAll('[type = "radio"]');
for (let i = 0; i < radios.length; i++) {radios[i].id = 'radio' + String(i + 1)}
const checkboxs = document.querySelectorAll('[type = "checkbox"]');
for (let i = 0; i < checkboxs.length; i++) {checkboxs[i].id = 'checkbox' + String(i + 1)}
const inputs = document.querySelectorAll('input');
let inCount = 0;
for (let i = 0; i < inputs.length; i++) {
	if (!inputs[i].hasAttribute('type')) {
		inCount++;
		inputs[i].id = 'input' + String(inCount);
	}
		//---EnterKey----------------------------
	if (isButton) inputs[i].addEventListener('keydown', function(event) {if (event.keyCode === 13) {
		button1.onclick(); 
		event.preventDefault();
	}});
}

	// Textarea ---------------------------------
const textareas = document.querySelectorAll('textarea');
for (let i = 0; i < textareas.length; i++) {
	textareas[i].id = 'textarea' + String(i + 1);
		//---EnterKey----------------------------
	if (isButton) textareas[i].addEventListener('keydown', function(event) {if (event.keyCode === 13) {
		button1.onclick();
		event.preventDefault();
	}});
}

	// Output -----------------------------------
const outputs = document.querySelectorAll('output');
for (let i = 0; i < outputs.length; i++) {outputs[i].id = 'output' + String(i + 1)}
	// Label ------------------------------------
const labels = document.querySelectorAll('label');
for (let i = 0; i < labels.length; i++) {labels[i].id = 'label' + String(i + 1)}
	// Div ------------------------------------
const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {divs[i].id = 'div' + String(i + 1)}
	// Form -------------------------------------
const fforms = document.querySelectorAll('form');
for (let i = 0; i < fforms.length; i++) {fforms[i].id = 'form' + String(i + 1)}

	// Document.title------------------------------
function splitFileName(s) {
	let a = s.split('/');
	s = a[a.length - 1];
	a = s.split('.');
	s = a[a.length - 2];
	return s;
}
if (document.title === '') document.title = splitFileName(decodeURI(document.URL));

	// Document Focus------------------------------
if (document.getElementById('textarea1') != null) textarea1.focus()
else if (document.getElementById('input1') != null) input1.focus()
else if (isButton) button1.focus();