function CreateArray(txt) {
	const symb = '&';
	const par = decodeURI(txt).split(symb);
	let folder = '/';
	
	if (par.length === 0) return;
	if (par[0].length > 1) folder += par[0].slice(1).replace('_', '/').trim() + '/';

	let kod = 0;					// зображення Слайд1.PNG, Слайд2.PNG...
	let nItemFrom = 1;
	let nItemTo = 1;
	if (par.length >= 2) {
		nItemTo = Number(par[1]);
		if (par[1] === 'i') kod = 1;	// зображення	1.png, 2.png...
		if (par[1] === 'v') kod = 2;	// відео		1.mp4, 2,mp4...
		if (par[1] === 'f') kod = 3;	// форма js		1.html, 2.html
		if (par[1] === 'h') kod = 4;	// сайт			1/index.html, 2/index.html
	} alert(kod)
	if (par.length > 2) {
		nItemFrom = Number(par[1]);
		nItemTo = Number(par[2]);
	}	

	if (isNaN(nItemFrom) || !Number.isInteger(nItemFrom)) nItemFrom = 1;
	if (nItemFrom < 1) nItemFrom = 1;
	if (nItemFrom > 99) nItemFrom = 99;
	if (isNaN(nItemTo) || !Number.isInteger(nItemTo)) nItemTo = 1;
	if (nItemTo < 1) nItemTo = 1;
	if (nItemTo > 99) nItemTo = 99;
	if (nItemFrom > nItemTo) nItemFrom = nItemTo;

	let txtHTML = '';

	if (kod < 1 || kod > 4) {
		txtHTML = '<div class="data-content">';		
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<div class="data-container"><img src="' + folder + 'Слайд' + String(i) + '.PNG" alt=""></div>';
		}
		txtHTML += '</div>';
	}
	
	if (kod === 1) {
		txtHTML = '<div class="data-content">';		
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<div class="data-container"><img src="' + folder + String(i) + '.png" alt=""></div>';
		}
		txtHTML += '</div>';
	}
	
	if (kod === 2) {
		txtHTML = '<div class="data-content">';		
		for (let i = nItemFrom; i <= nItemTo; i++) {
				txtHTML += '<div class="data-container"><video controls><source src="' + folder + String(i) + '.mp4" type="video/mp4">Не можна відобразити відео :(</video></div>';
		}
		txtHTML += '</div>';
	}
		
	if (kod === 3) {
		txtHTML = '<div class="menu-content"><div class="menu-header">Форми-задачі</div>';
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<a class="menu-item menu--color-' + String(i % 2 + 1) + '" href="' + folder + String(i) + '.html">Форма-' + String(i) + '</a>';
		}
		txtHTML += '</div>';
	}
	
	if (kod === 4) {	
		txtHTML = '<div class="menu-content"><div class="menu-header">Вебсайти</div>';
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<a class="menu-item menu--color-' + String(i % 2 + 1) + '" href="' + folder + String(i) + '/index.html">Сайт-' + String(i) + '</a>';
		}
		txtHTML += '</div>';
	}

	document.body.innerHTML = txtHTML;
}