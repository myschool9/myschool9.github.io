function Filtering(nItem, myTime, isTiming) {
  let mySel = document.getElementById("select");
  if (nItem < 0) {
    nItem = 0;
  }
  if (nItem >= mySel.length) {
    nItem = mySel.length - 1;
  }
  for (let i = 0; i < mySel.length; i++) {
    if (i === nItem) {
      document.getElementById("m" + String(i)).style.display = "table";
    } else {
      document.getElementById("m" + String(i)).style.display = "none";
    }
  }
  mySel.selectedIndex = nItem;

    /* замалювання поточного рядка або шапки, якщо день - поточний */
  let n = new GetCurrentNum(myTime);
  document.getElementById("header").style.backgroundColor = "var(--header-color)";
  if (!isTiming && n === nItem) {
    document.getElementById("header").style.backgroundColor = "var(--light-color)";
  }
  if (isTiming) {
    document.getElementById("m" + String(nItem) + "_" + String(n)).style.backgroundColor = "var(--light-color)";
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