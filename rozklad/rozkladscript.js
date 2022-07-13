function Filtering(nItem, myTime, isTiming) {
	const myStyle = 'width: 96%; max-width: 500px; margin-top: 45px; margin-left: 6px; border-bottom: dotted 1px #808080; display: table;';
    let mySel = document.getElementById('id_itemSelect');
		if (nItem < 0) {
			nItem = 0;
		}
		if (nItem >= mySel.length) {
			nItem = mySel.length - 1;
		}
    for (let i = 0; i < mySel.length; i++) {
        if (i == nItem) {
            document.getElementById('m' + String(nItem)).style = myStyle;
        } else {
            document.getElementById('m' + String(i)).style.display = "none";
        }
    }
    mySel.selectedIndex = nItem;

    /* замалювання поточного рядка або шапки, якщо день - поточний */    
    let n = GetCurrentNum(myTime);
    document.getElementById('id_header').style.backgroundColor = "#8fbc8f";
    if (!isTiming && n == nItem) {
        document.getElementById('id_header').style.backgroundColor = "#f0e68c";
    }
    if (isTiming) {
        document.getElementById('m' + String(nItem) + '_'+ String(n)).style.backgroundColor = "#f0e68c";
    }
}

function GetCurrentNum(myTime) { /* визначення номера рядка, потрібно лише для замалювання поточного рядка! */
    let d = new Date();
    let m = new Date();
    let g = new Date();
    let day = d.getUTCDay();
    let min = 60 * g.getHours() + m.getMinutes();

    let i = 0;
    while (i < 7 && myTime[i] + 3 <= min) {
        i++;
    }
    if (i==7) {
        i=6;
    }
    if (day==0 || day==6) {
        day=0;
        i=0;
    } else {
        day--;
    }
    return 7 * day + i;
}