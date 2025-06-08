var startX, startY;
var nItem = 0;
var folder = '/';

//-----------------------------------------------
function CreateList(txt) {
	const symb = '&';
	const par = decodeURI(txt).split(symb);
	if (par.length > 0 && par[0].length > 1) folder += par[0].slice(1, par[0].length).replace('_', '/').trim() + '/';
	if (par.length > 1) nItem = Number(par[1]) - 1;

	let txtSel = '';
	for (let i = 1; i <= list.length; i++) {
		txtSel += '<option>' + String(i) + '</option>';
	}
	document.getElementById('listBox').innerHTML = txtSel;

	ShowItem();
}

//-----------------------------------------------'°'
function ShowItem() {
	if (list.length === 0) return;
	nItem = Number(nItem);
	if (isNaN(nItem)) nItem = 0;
	if (nItem < 0) nItem = 0;
	if (nItem >= list.length) nItem = list.length - 1;

//-----------------
	document.getElementById('taskJSNumber').innerHTML = '№&nbsp;' + String(nItem + 1);
	document.getElementById('taskJSText').innerHTML = list[nItem].txt;
	
//-----------------
if (list[nItem].hint.trim() === '') {
		document.getElementById('taskJSHint').style.display = 'none';
	} else {
		document.getElementById('taskJSHint').style.display = '';		
		document.getElementById('taskJSHint').innerHTML = '(підказка: ' + list[nItem].hint + ')';
	}	

//-----------------	
	if (list[nItem].obj.trim() === '') {
		document.getElementById('taskJSImage').style.display = 'none';
	} else {
		document.getElementById('taskJSImage').style.display = '';		
		document.getElementById('taskJSImage').src = folder + list[nItem].obj + '.png'			
	}
	
//-----------------	
	let s = '';
	if (list[nItem].inTitle.length === 1) {
		s = list[nItem].inTitle[0];
	} else {
		for (let i = 0; i < list[nItem].inTitle.length; i++) {
			if (list[nItem].inTitle.length > 1) s += String(i + 1) + ') ' + list[nItem].inTitle[i] + ';<br>';
		}
		s = s.slice(0, -5) + '.';
	}
	document.getElementById('taskJSIn').innerHTML = s;

//-----------------	
	s = '';
	if (list[nItem].outTitle.length === 1) {
		s = list[nItem].outTitle[0];
	} else {
		for (let i = 0; i < list[nItem].outTitle.length; i++) {
			if (list[nItem].outTitle.length > 1) s += String(i + 1) + ') ' + list[nItem].outTitle[i] + ';<br>'; 
		}
		s = s.slice(0, -5) + '.';
	}
	document.getElementById('taskJSOut').innerHTML = s;

//-----------------	
	s = '<table>';
	for (let i = 0; i < list[nItem].inTests.length; i++) {
		s += '<tr>';
		for (let j = 0; j < list[nItem].inTests[i].length; j++) {
			s += '<td>' + list[nItem].inTests[i][j] + '</td>';
		}
		s += '<td>==></td>'
		for (let j = 0; j < list[nItem].outTests[i].length; j++) {
			s += '<td>' + list[nItem].outTests[i][j] + '</td>';
		}
		s += '</tr>';
	}
	s += '</table>';
	document.getElementById('taskJSTests').innerHTML = s;

//-----------------
	if (list[nItem].solve.trim() === '') {
		document.getElementById('taskJSSolve').style.display = 'none';
	} else {
		document.getElementById('taskJSSolve').style.display = '';		
		document.getElementById('taskJSSolveImage').src = folder + list[nItem].obj + '.png'			
	}

//-----------------
	document.getElementById('listBox').selectedIndex = nItem;
}

//-----------------------------------------------
function touchStart() {
	startX = event.touches[0].clientX;
	startY = event.touches[0].clientY;
}

//-----------------------------------------------
function touchEnd() {
	let dX = event.changedTouches[0].clientX - startX;
	let dY = event.changedTouches[0].clientY - startY;

	if (dX > 50 && Math.abs(dX) > Math.abs(dY)) {
		nItem -= 1;
		ShowItem();
	}
	if (dX < -50 && Math.abs(dX) > Math.abs(dY)) {
		nItem += 1;
		ShowItem();
	}
}