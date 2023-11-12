const inp = document.getElementsByTagName('input');
const inpN = inp.length;
const but = document.getElementsByTagName('button');
const butN = but.length;

//-------------------------------------
function setFocus(n) {
	if (n < 0 || n >= inpN) n = 0;
	if (inpN > 0) inp[n].focus();
}

//-------------------------------------
function splitFileName(s) {
	let a = s.split('/');
	s = a[a.length - 1];
	a = s.split('.');
	s = a[a.length - 2];
	return s;
}

//-------------------------------------
//-------------------------------------
const nullText = '';
addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		for (let i = 0; i < inpN; i++) {
			inp[i].value = '';
		}
		if (document.getElementById('span1') !== null) document.getElementById('span1').innerText = nullText;
		if (document.getElementById('span2') !== null) document.getElementById('span2').innerText = nullText;
		if (document.getElementById('span3') !== null) document.getElementById('span3').innerText = nullText;
		setFocus(0);
	}
});

for (let i = 0; i < inpN ; i++) {
	inp[i].addEventListener('keydown', function(event) {
		if (event.keyCode === 13 && butN > 0) {but[0].click(); setFocus(i + 1);}
	});
}
if (butN > 0) {
	but[0].addEventListener('keydown', function(event) {
		if (event.keyCode === 13) {but[0].click(); setFocus(0);}
	});
}

document.title = splitFileName(decodeURI(document.URL));
setFocus(0);