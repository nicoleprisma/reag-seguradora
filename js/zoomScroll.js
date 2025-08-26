function handleClick(event, desktop) {
  let img = event.target
  let classe = desktop ? 'openImgZoomDesktop' : 'openImgZoom'
  img.classList[img.classList.contains(classe) ? 'remove' : 'add'](classe)
  img.parentElement.classList[img.parentElement.classList.contains('zoomDiv') ? 'remove' : 'add']('zoomDiv');
  let aviso = img.parentElement.nextElementSibling;

  if ($(".hidLinguagem").val() == "ptg") {
    img.classList.contains(classe) ? aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=+F/UamAHVaIMUVUesuJeFg==' alt='lupa'/> Clique para reduzir"
    : aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Clique para ampliar";
  }else {
    img.classList.contains(classe) ? aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=+F/UamAHVaIMUVUesuJeFg==' alt='lupa'/> Click to reduce"
    : aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Click to enlarge ";
  }
}

window.onload = () => {
  let desktop = false;

  if (window.matchMedia('(max-width: 991px)').matches) {
    desktop = false;
    document.querySelectorAll('[data-img-zoom]').forEach(i => {
      const aviso = document.createElement('span')
      if ($(".hidLinguagem").val() == "ptg") {
        aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Clique para ampliar";
      }else{
        aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Click to enlarge";
      }
      aviso.style.display = 'flex';
      aviso.style.alignItems = 'center';
      aviso.style.justifyContent = 'center';
      aviso.style.gap = '8px';
      aviso.classList.add('aviso-img-zoom');
      i.parentNode.parentNode.insertBefore(aviso, i.parentNode.nextSibling);
      i.addEventListener('click', (event) => handleClick(event, desktop))
    })
  } else if (window.matchMedia('(min-width: 992px)').matches) {
    desktop = true;
    document.querySelectorAll('[data-img-zoom-desktop]').forEach(i => {
      const aviso = document.createElement('span')
      if ($(".hidLinguagem").val() == "ptg") {
        aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Clique para ampliar";
      }else{
        aviso.innerHTML = "<img src='https://files.workr.com.br/ViewImage.aspx?image=705VTKayo2XHUcL7p2AAaw==' alt='lupa'/> Click to enlarge";
      }
      aviso.style.display = 'flex';
      aviso.style.alignItems = 'center';
      aviso.style.justifyContent = 'center';
      aviso.style.gap = '8px';
      aviso.classList.add('aviso-img-zoom');
      i.parentNode.parentNode.insertBefore(aviso, i.parentNode.nextSibling);
      i.addEventListener('click', (event) => handleClick(event, desktop))
    })
  }
}