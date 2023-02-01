function Filtering(nItem, isTotal) {
	let mySel = document.getElementById('select');
	if (nItem < 0) {
		nItem = 0;
	}
	if (nItem >= mySel.length) {
		nItem = mySel.length - 1;
	}

	for (let i = 1; i < mySel.length; i += 1) {
		if (i === nItem || isTotal && nItem === 0) {
			document.getElementById('m' + String(i)).style.visibility = 'visible';
		} else {
			document.getElementById('m' + String(i)).style.visibility = 'collapse';
		}
	}

	mySel.selectedIndex = nItem;
}