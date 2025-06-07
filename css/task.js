var startX, startY;
var nItem = 0;
var folder = '/';

//-----------------------------------------------
function CreateList(txt) {
	const symb = '&';
	const par = decodeURI(txt).split(symb);
	if (par.length > 0 && par[0].length > 1) folder += par[0].slice(1, par[0].length).replace('-', '/').trim() + '/';
	if (par.length > 1) nItem = Number(par[1]) - 1;	

	let txtSel = '';
	for (let i = 1; i <= list.length; i++) {
		txtSel += '<option>' + String(i) + '</option>';
	}
	document.getElementById('listBox').innerHTML = txtSel;

	ShowItem();
}

//-----------------------------------------------
function ShowItem() {
	if (list.length === 0) return;
	nItem = Number(nItem);
	if (isNaN(nItem)) nItem = 0;
	if (nItem < 0) nItem = 0;
	if (nItem >= list.length) nItem = list.length - 1;

	document.getElementById('taskNumber').innerHTML = '№&nbsp;' + String(nItem + 1) + '. ';
	document.getElementById('taskName').innerHTML = list[nItem].name;
	document.getElementById('taskVideo').src = folder + list[nItem].file + '.mp4';
	document.getElementById('taskComment').innerHTML = list[nItem].comment;
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