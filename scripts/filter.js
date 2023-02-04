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