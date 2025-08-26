function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

let offset = 0;
const header = document.querySelector(".headerFixoMenu");
const headerMenu = header.querySelector(".header");
function menuFixo() {
  if (header) {
    if (window.pageYOffset >= header.clientHeight) {
      headerMenu.classList.add("fixed");
    }
    if (
      window.pageYOffset >= header.clientHeight &&
      header.classList.contains("menu-bar") &&
      offset <= window.pageYOffset
    ) {
      header.style.top = `-${header.clientHeight + 20}px`;
      setTimeout(() => {
        header.classList.remove("menu-bar");
        header.style.top = `-${header.clientHeight + 20}px`;
      }, 400);
    } else if (
      offset > window.pageYOffset &&
      !header.classList.contains("menu-bar")
    ) {
      header.classList.add("menu-bar");
      header.style.top = `0px`;
    }
    if (offset == 0) {
      header.style.top = `-${header.clientHeight + 20}px`;
    }
    offset = window.pageYOffset;
    if (window.pageYOffset == 0) {
      header.classList.remove("menu-bar");
      headerMenu.classList.remove("fixed");
      header.style.top = `0px`;
    }
  }
}
menuFixo();

window.addEventListener("scroll", debounce(menuFixo, 5));
