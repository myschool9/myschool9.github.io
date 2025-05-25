function CreateArray(parametrs) {
	const symb = '&';
	const par = decodeURI(parametrs).split(symb);

	if (par.length < 3) return;

	let folder = par[0].slice(1, par[0].length);
	folder = '/' + folder.replace('-', '/') + '/';

	CreateImagesArray(folder, par[1], par[2]);
}

/*---------------------------------------*/
function CreateImagesArray(folder, imgFrom, imgTo) {
	imgFrom = Number(imgFrom);
	imgTo = Number(imgTo);
	if (isNaN(imgFrom) || isNaN(imgTo) || imgFrom > 99 || imgTo > 99 || imgFrom <= 0 || imgTo <= 0 || imgFrom > imgTo) return;

	let txt = '<div class="data-content">';
	for (let i = imgFrom; i <= imgTo; i++) {
		txt += '<div class="image-container"><img src="' + folder + 'Слайд' + String(i) + '.PNG" alt=""></div>';
	}
	txt += '</div>';

	document.body.innerHTML = txt;
	document.title = 'Презентація';
}