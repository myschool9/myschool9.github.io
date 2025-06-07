var folder = '/';

//-----------------------------------------------
function CreateArray(txt) {
	const symb = '&';
	const par = decodeURI(txt).split(symb);
	
	if (par.length > 0 && par[0].length > 1) folder += par[0].slice(1, par[0].length).replace('-', '/').trim() + '/';

	let nItemFrom = 0;
	let nItemTo = 0;
	if (par.length > 1) nItemTo = Number(par[1]) - 1;
	if (par.length > 2) {
		nItemFrom = Number(par[1]) - 1;
		nItemTo = Number(par[2]) - 1;
	}

	if (isNaN(nItemFrom)) nItemFrom = 0;
	if (nItemFrom < 0) nItemFrom = 0;
	if (nItemFrom > 99) nItemFrom = 99;
	if (isNaN(nItemTo)) nItemTo = 0;
	if (nItemTo < 0) nItemTo = 0;
	if (nItemTo > 99) nItemTo = 99;
	if (nItemFrom > nItemTo) nItemFrom = nItemTo;
	
	let txtHTML = '<div class="data-content">';
	for (let i = imgFrom; i <= imgTo; i++) {
		txtHTML += '<div class="image-container"><img src="' + folder + 'Слайд' + String(i) + '.PNG" alt=""></div>';
	}
	txtHTML += '</div>';

	document.body.innerHTML = s;
}