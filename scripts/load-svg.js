var url = 'https://bring-hedwig.s3.amazonaws.com/hedwig/assets/svg-sprite.svg';

function loadIcons() {
  var ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);
  ajax.send();

  ajax.onload = function(e) {
    var div = document.createElement("div");
    div.style.display = 'none';
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  }
}

loadIcons();
