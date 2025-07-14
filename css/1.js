let tags;
let haveID;
let isSolve = typeof solve === 'function';

for (let tagName of ['button', 'radio', 'checkbox', 'input', 'h1', 'h2', 'h3', 'form', 'output', 'label', 'div', 'img', 'textarea', 'canvas']) {
	
	tags = document.querySelectorAll(tagName);
	if (tags.length === 0) tags = document.querySelectorAll('[type="' + tagName + '"]');

	haveID = 0;
	tags.forEach((tag, i) => (tag.id === '') ? tag.id = tagName + (i + 1 - haveID) : haveID += 1);

	if (tagName === 'button' && tags.length !== 0) {
		tags[0].focus();
		tags.forEach((tag) => {
			tag.type = 'button';
			if (typeof tag.onclick !== 'function' && isSolve) tag.onclick = function() {solve();}
		});
	}
	
	if (['h1', 'h2', 'h3'].includes(tagName)) tags.forEach((tag) => tag.id = tagName);
	
	if (['input', 'radio', 'checkbox'].includes(tagName) && tags.length !== 0) {
		tags[0].focus();
		tags.forEach((tag, i) => {
			tag.addEventListener('keydown', function(event) {
				if (event.keyCode === 13 && isSolve) {
					solve();
					event.preventDefault();
				};
			})
		});
	}
}