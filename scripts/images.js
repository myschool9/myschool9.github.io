function CreateImgArray(params) {
	const symb = '&';
	const rowBegin='<tr><td class="image-container"><img src="';
	const rowEnd='.png" alt=""></td></tr>';

	let pos = params.search(symb);
	if (pos < 1) return;

	let folder = params.slice(1, pos);
	folder = '../' + folder.replace('_', '/') + '/'

	let lastNum = Number(params.slice(pos + 1));
	if (isNaN(lastNum) || lastNum > 99) return;

	document.getElementById('imgArray').innerHTML = '';
	for (let i = 1; i <= Number(lastNum); i++) {
		document.getElementById('imgArray').innerHTML += rowBegin + folder + String(i) + rowEnd;
	}
}