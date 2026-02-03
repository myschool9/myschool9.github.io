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
  
//=============================================================================
async function loadData(folder) {
  const data_div = document.createElement('div');
  data_div.className = 'data-content';
  document.body.appendChild(data_div);

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
      break;
    }
  }
}

//=============================================================================
function CreateArray(txt) {
  const MAX_DATA = 200;
  const par = decodeURI(txt).split('&');
  if (par.length === 0) return;
	
  let folder = '/';
  if (par[0].length > 1) folder += par[0].slice(1).replace('_', '/').trim() + '/';
    
  n1 = 1;
  n2 = MAX_DATA; 
  if (par.length === 3 && Number.isInteger(par[1]) && Number.isInteger(par[2])) {
    n1 = Number(par[1]);
    n2 = Number(par[2]);
  }
  if (par.length === 2 && Number.isInteger(par[1])) {
    n2 = Number(par[1]);
  }    

  loadData(folder);    
}

/*
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
//	document.body.innerHTML = txtHTML;

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