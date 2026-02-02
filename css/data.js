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

loadAll();

}

