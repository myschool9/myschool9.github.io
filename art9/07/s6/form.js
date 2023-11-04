const inp = document.getElementsByTagName('input');
const inpN = inp.length;
const but = document.getElementsByTagName('button');
const butN = but.length;

for (let i = 0; i < inpN - 1; i++) {
	inp[i].addEventListener('keydown', function(event) {
		if (event.keyCode === 13) {inp[i + 1].focus()}
	});
}
if (inpN > 0) {
	inp[inpN - 1].addEventListener('keydown', function(event) {
		if (event.keyCode === 13) {if (butN > 0) {but[0].focus()}}
	});
}

if (butN > 0) {
	but[0].addEventListener('click', function() {
		f1(); if (inpN > 0) {inp[0].focus()}
	});
	but[0].addEventListener('keydown', function(event) {
		if (event.keyCode === 13) {f1(); if (inpN > 0) {inp[0].focus()}}
	});
}

if (inpN > 0) {
	inp[0].focus();
} else if (butN > 0) {
	but[0].focus()
}