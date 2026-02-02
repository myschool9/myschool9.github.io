function CreateArray(txt) {
	const par = decodeURI(txt).split('&');
	if (par.length === 0) return;
	
	let folder = '/';
	if (par[0].length > 1) folder += par[0].slice(1).replace('_', '/').trim() + '/';
    
    n1 = 1;
    n2 = 200;
    if (par.length === 3 && Number.isInteger(par[1]) && Number.isInteger(par[2])) {
        n1 = Number(par[1]);
        n2 = Number(par[2]);
    }
    if (par.length === 2 && Number.isInteger(par[1])) {
        n2 = Number(par[1]);
    }    
    
/*
	
      nItemFrom = int
    let kod = 0;					// зображення Слайд1.PNG, Слайд2.PNG...
	let nItemFrom = 1;
	let nItemTo = 1;
	if (par.length >= 2) {
		if (par[1] === 'i') kod = 1;	// зображення	1.png, 2.png...
		else if (par[1] === 'v') kod = 2;	// відео		1.mp4, 2,mp4...
		else if (par[1] === 'f') kod = 3;	// форма js		1.html, 2.html
		else if (par[1] === 'h') kod = 4;	// сайт			1/index.html, 2/index.html
		else nItemTo = Number(par[1]);
	}
	if (par.length > 2) {
		nItemFrom = Number(par[1]);
		nItemTo = Number(par[2]);
	}	

	if (nItemFrom > 300) nItemFrom = 300;
	if (isNaN(nItemFrom) || !Number.isInteger(nItemFrom) || nItemFrom < 1) nItemFrom = 1;
	if (nItemTo > 300) nItemTo = 300;
	if (isNaN(nItemTo) || !Number.isInteger(nItemTo) || nItemTo < 1) nItemTo = 1;
	if (nItemFrom > nItemTo) nItemFrom = nItemTo;

	let txtHTML = '';

	if (kod === 1) {
		txtHTML = '<div class="data-content">';		
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<div class="data-container"><img src="' + folder + i + '.png" alt=""></div>';
		}
		txtHTML += '</div>';
	
	} else if (kod === 2) {
		txtHTML = '<div class="data-content">';		
		for (let i = nItemFrom; i <= nItemTo; i++) {
				txtHTML += '<div class="data-container"><video controls><source src="' + folder + i + '.mp4" type="video/mp4">Не можна відобразити відео :(</video></div>';
		}
		txtHTML += '</div>';
	
	} else if (kod === 3) {
		txtHTML = '<div class="menu-content"><div class="menu-header">Форми-задачі</div>';
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<a class="menu-item menu--color-' + (i % 2 + 1) + '" href="' + folder + i + '.html">Форма-' + i + '</a>';
		}
		txtHTML += '</div>';

	} else if (kod === 4) {	
		txtHTML = '<div class="menu-content"><div class="menu-header">Вебсайти</div>';
		for (let i = nItemFrom; i <= nItemTo; i++) {
			txtHTML += '<a class="menu-item menu--color-' + (i % 2 + 1) + '" href="' + folder + i + '/index.html">Сайт-' + i + '</a>';
		}
		txtHTML += '</div>';

	} else {
		txtHTML = '<div class="data-content">';
        for (let i = 1; i <= 200; i++) {
            const res = fetch(`${folder}Слайд${i}.PNG`);
            if (!res.ok) break;
            //txtHTML += '<div class="data-container"><img src="' + folder + 'Слайд' + i + '.PNG" alt=""></div>';
		}
		txtHTML += '</div>';
	}
*/

const data_div = document.createElement('div');
data_div.className = 'data-content';
document.body.appendChild(data_div);

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

function loadVideo(src) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.onloadeddata = () => resolve(video);
    video.onerror = reject;
  });
}

async function loadAll() {
    
  for (let i = n1; i <= n2; i++) {
    try {
      const img = await loadImage(`${folder}Слайд${i}.PNG`);
      const div = document.createElement('div');
      div.className = 'data-container';
      div.appendChild(img);
      data_div.appendChild(div);        
    } catch {
      if (i > n1) return;
      break;
    }
  }
  
  for (let i = n1; i <= n2; i++) {
    try {
      const img = await loadImage(`${folder}${i}.png`);
      const div = document.createElement('div');
      div.className = 'data-container';
      div.appendChild(img);
      data_div.appendChild(div);        
    } catch {
      if (i > n1) return;
      break;
    }
  }

  for (let i = n1; i <= n2; i++) {
    try {
      const video = await loadVideo(`${folder}${i}.mp4`);
      const div = document.createElement('div');
      div.className = 'data-container';
      div.appendChild(video);
      data_div.appendChild(div);
    } catch {
      if (i > n1) return;        
      break;
    }
  }
 /*
  for (let i = 1; i <= 200; i++) {
    try {
      href = `art8/tthtml/${i}/index.html`;
      new URL(href, document.baseURI);
      
      const a = document.createElement('a');
      a.href = `art8/tthtml/${i}/index.html`;
      a.textContent = `Сторінка ${i}`;
      a.className = `menu-item menu--color-{i % 2 + 1}`;
      document.body.appendChild(a);
    } catch {
      break;
    }
  }
*/
}

loadAll();

//	document.body.innerHTML = txtHTML;
}