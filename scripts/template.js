function CreateArray(parametrs) {
	const symb = '&';
	const par = decodeURI(parametrs).split(symb);

	if (par.length < 2) return;

	let folder = par[0].slice(1, par[0].length);
	folder = '/' + folder.replace('_', '/') + '/';

	let par2 = (par.length > 2) ? par[2] : '';
	let par3 = (par.length > 3) ? par[3] : '';
	let par4 = (par.length > 4) ? par[4] : '';
	if (par[1] === 'i') CreateImagesArray(folder, par2, par3);	// par3 for homework!
	if (par[1] === 's') CreateSitesArray(folder, par2, par3, par4);
	if (par[1] === 'v') CreateVideosArray(folder, par2, par3);
}

/*---------------------------------------*/
function CreateImagesArray(folder, countImg, isHomework) {

	countImg = Number(countImg);
	if (isNaN(countImg) || countImg > 99 || countImg <= 0) return;

	let txt = '<table class="content content__without-header">';
	for (let i = 1; i <= countImg; i++) {
		txt += '<tr><td class="image-container"><img src="' + folder + String(i) + '.png" alt=""></td></tr>';
	}

	if (isHomework !== '') {
		txt += '<tr><td class="image-container"><img src="' + folder + 'homework.png" alt="Домашнє завдання">';
		txt += '<a href="' + folder + 'homework.zip">Завантажити файл-архів завдання</a></td></tr>';
	}
	txt += '</table>';

	document.body.innerHTML = txt;
	document.title = 'Зображення';
}

/*---------------------------------------*/
function CreateSitesArray(folder, count, startHTML, groupTitle) {

	count = Number(count);
	if (isNaN(count) || count > 99 || count <= 0) return;
	if (startHTML === '') startHTML = 'index';

	let txt = '<table class="page-header"><tr><td class="page-title">' + groupTitle + '</td></tr></table>';
	txt += '<table class="content"><tr>';
	for (let i = 1; i <= count; i++) {
		if (i % 2 === 1) txt += '<tr>';
		if (i % 4 === 1 || i % 4 === 0) {
			txt += '<td class="theme theme--color-1"><a href="';
		} else {
			txt += '<td class="theme theme--color-2"><a href="';
		}
		txt += folder + 's' + String(i) + '/' + startHTML + '.html">Приклад - ' + String(i) + '</a></td>';
		if (i % 2 === 0) txt += '</tr>';
	}

	if (count % 2 === 1) txt += '</tr>';
	txt += '</table>';

	document.body.innerHTML = txt;
	document.title = 'Вебсайти, вебсторінки';
}

/*---------------------------------------*/
function CreateVideosArray(folder, countVideo, countImg) {

	countVideo = Number(countVideo);
	if (isNaN(countVideo) || countVideo > 99 || countVideo <= 0) return;
	countImg = Number(countImg);
	if (isNaN(countImg) || countImg > 99 || countImg <= 0) countImg = 0;

	let txt = '<table class="content content__without-header">';
	for (let i = 1; i <= countVideo; i++) {
		txt += '<tr><td class="video-container"><video controls><source src="' + folder + String(i) + '.mp4" type="video/mp4">Не можна відобразити відео :(</video></td></tr>';
	}
	for (let i = 1; i <= countImg; i++) {
		txt += '<tr><td class="image-container"><img src="' + folder + String(i) + '.png" alt=""></td></tr>';
	}
	txt += '</table>';

	document.body.innerHTML = txt;
	let s = 'Відео та зображення';
	if (countImg === 0) s = 'Відео';
	if (countVideo === 0) s = 'Зображення';
	document.title = s;
}