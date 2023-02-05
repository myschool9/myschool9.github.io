function Filtering(nItem, isFullList) {
	let items = document.getElementById('listBox');
	if (nItem < 0) {
		nItem = 0;
	}
	if (nItem >= items.length) {
		nItem = items.length - 1;
	}

	let shiftIndex = 0;
	if (!isFullList) {
		shiftIndex = 1;
	}

	for (let i = 1 - shiftIndex; i < items.length; i += 1) {
		if (i === nItem || nItem === -shiftIndex) {
			document.getElementById('m' + String(i + shiftIndex)).style.visibility = 'visible';
		} else {
			document.getElementById('m' + String(i + shiftIndex)).style.visibility = 'collapse';
		}
	}

	items.selectedIndex = nItem;
}

//------------------------------------
function GetActiveRow(nItem, myTime, isTiming) {
	/* замалювання поточного рядка або шапки, якщо день - поточний */
	let n = GetCurrentNum(myTime);
	if (!isTiming && n === nItem) {
		document.getElementById('timetable_header').style.backgroundColor = 'var(--js-current-time-color)';
	} else {
		document.getElementById('timetable_header').style.backgroundColor = 'var(--js-header-color)';
	}

	if (isTiming) {
		let arrTD = document.querySelectorAll('#m' + String(nItem + 1) + '_' + String(n) + '_0 > td');
		for (let elem of arrTD) {
			elem.style.backgroundColor = 'var(--js-current-time-color)';
		}
	}
}

/* визначення номера рядка, потрібно лише для замалювання поточного рядка! */
function GetCurrentNum(myTime) {
	let d = new Date();
	let m = new Date();
	let g = new Date();
	let day = d.getUTCDay();
	let min = 60 * g.getHours() + m.getMinutes();

	let i = 0;
	while (i < 7 && myTime[i] + 3 <= min) {
		i += 1;
	}
	if (i === 7) {
		i = 6;
	}
	if (day === 0 || day === 6) {
		day = 0;
		i = 0;
	} else {
		day -= 1;
	}
	return 7 * day + i;
}