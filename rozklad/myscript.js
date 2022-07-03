function Filtering(nItem) {
    let mySel = document.getElementById('id_itemSelect');
    if (nItem < 0 || nItem >= mySel.length) {
        nItem = 0;
    }
    for (let i = 0; i < mySel.length; i++) {
        if (i == nItem) {
            document.getElementById('m' + String(nItem)).style.display = "table";
        } else {
            document.getElementById('m' + String(i)).style.display = "none";
        }
    }
    mySel.selectedIndex = nItem;

    /* замалювання поточного рядка */    
    let n = GetCurrentNum();
    let x = Number(location.href[location.href.indexOf('.html') - 1]);
    document.getElementById('id_header').style.backgroundColor = "#8fbc8f";
    if (x <= 2 && n == nItem) {
        document.getElementById('id_header').style.backgroundColor = "#f0e68c";
    }
    if (x > 2) {
        document.getElementById('m' + String(nItem) + '_'+ String(n)).style.backgroundColor = "#f0e68c";
    }
}

function GetCurrentNum() { /* визначення номера рядка, потрібно лише для замалювання поточного рядка! */
    let d = new Date();
    let m = new Date();
    let g = new Date();
    let time = [585, 645, 705, 780, 840, 900, 960];
    let day = d.getUTCDay();
    let min = 60 * g.getHours() + m.getMinutes();

    let i = 0;
    while (i < 7 && time[i] + 3 <= min) {
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

function ActivateDoc() { /* завантаження одразу з фільтром */
    Filtering(Number(location.search.slice(1)))
}

function ChangeWeek() { /* зміна чисельників на знаменники і навпаки */
    let n = location.href.indexOf('.html') - 1;
    let x = Number(location.href[n]);
    if (x % 2 == 0) {
        x--;
    } else {
        x++;
    }
    location.href = location.href.slice(0, n) + String(x) + '.html?' + 
        String(document.getElementById('id_itemSelect').selectedIndex);
}