function CreateObjArray(params) {
	const rowBegin='<tr><td class="content__images"><img src="';
	const rowEnd='.png" alt=""></td></tr>';

	let pos = params.search("&");
	let folder = 'ppt-' + params.slice(1, pos);
	let lastObj = params.slice(pos + 1);

	document.getElementById("objArray").innerHTML = "";
	for (let i = 0; i <= Number(lastObj); i += 1) {
		document.getElementById("objArray").innerHTML += rowBegin + folder + "/" + String(i) + rowEnd;
	}
}