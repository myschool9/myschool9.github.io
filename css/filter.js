function Filtering(nItem) {
	let mySel = document.getElementById("select");
	if (nItem < 0) {
		nItem = 0;
	}
	if (nItem >= mySel.length) {
		nItem = mySel.length - 1;
	}

	if (nItem === 0) {
		for (let i = 1; i < mySel.length; i += 1) {
			document.getElementById("m" + String(i)).style.display = "table";
		}
	} else {
		for (let i = 1; i < mySel.length; i += 1) {
			if (i === nItem) {
				document.getElementById("m" + String(i)).style.display = "table";
			} else {
				document.getElementById("m" + String(i)).style.display = "none";
			}
		}
	}

	mySel.selectedIndex = nItem;
}