function CreateImgArray(params) {
	const symb = '&';
	const rowBegin='<tr><td class="content__images"><img src="';
	const rowEnd='.png" alt=""></td></tr>';

	let pos = params.search(symb);
	if (pos < 1) {
		return;
	}

	let folder = params.slice(1, pos);
	folder = '../' + folder.replace('_', '/') + '/'

	let lastNum = Number(params.slice(pos + 1));
	if (isNaN(lastNum) || lastNum > 77) {
		return;
	}

	document.getElementById('imgArray').innerHTML = '';
	for (let i = 0; i <= Number(lastNum); i += 1) {
		document.getElementById('imgArray').innerHTML += rowBegin + folder + String(i) + rowEnd;
	}
}