function Filtering(nItem, isFullList) {
	let items = document.getElementById('listBox');
	if (nItem < 0) {
		nItem = 0;
	}
	if (nItem >= items.length) {
		nItem = items.length - 1;
	}

	for (let i = 1; i < items.length; i += 1) {
		if (i === nItem || isFullList && nItem === 0) {
			document.getElementById('m' + String(i)).style.visibility = 'visible';
		} else {
			document.getElementById('m' + String(i)).style.visibility = 'collapse';
		}
	}

	items.selectedIndex = nItem;
}