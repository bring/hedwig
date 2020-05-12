function replaceLastPathofUrl(url, dest) {
  const split = url.split('/');
  split[split.length - 1] = dest;
  return split.join('/');
}

// Self reference the script tag and get the sprite
const src = document.getElementById('hw-icons').src;
const spriteUrl = replaceLastPathofUrl(src, 'svg-sprite.svg');

// Load svg-sprite with ajax
// https://css-tricks.com/ajaxing-svg-sprite/
function loadIcons() {
  const ajax = new XMLHttpRequest();

  ajax.withCredentials = true;
  ajax.open('GET', spriteUrl, true);
  ajax.send();

  ajax.onload = function (e) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}

loadIcons();
