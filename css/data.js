var folder = '/';

//-----------------------------------------------
function CreateArray(txt) {
	const symb = '&';
	const par = decodeURI(txt).split(symb);
	
	if (par.length > 0 && par[0].length > 1) folder += par[0].slice(1, par[0].length).replace('-', '/').trim() + '/';

	let nItemFrom = 1;
	let nItemTo = 1;
	if (par.length > 1) nItemTo = Number(par[1]);
	if (par.length > 2) {
		nItemFrom = Number(par[1]);
		nItemTo = Number(par[2]);
	}

	if (isNaN(nItemFrom)) nItemFrom = 1;
	if (nItemFrom < 1) nItemFrom = 1;
	if (nItemFrom > 99) nItemFrom = 99;
	if (isNaN(nItemTo)) nItemTo = 1;
	if (nItemTo < 1) nItemTo = 1;
	if (nItemTo > 99) nItemTo = 99;
	if (nItemFrom > nItemTo) nItemFrom = nItemTo;
	
	let txtHTML = '<div class="data-content">';
	for (let i = nItemFrom; i <= nItemTo; i++) {
		txtHTML += '<div class="image-container"><img src="' + folder + String(i) + '.png" alt=""></div>';
	}
	txtHTML += '</div>';

	document.body.innerHTML = txtHTML;
}