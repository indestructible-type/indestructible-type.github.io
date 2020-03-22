document.getElementById('title').style = "font-variation-settings: 'opsz' " + Math.floor(window.innerWidth/40 + 40) + ";";
document.getElementById('opszt').innerHTML = "Optical Size: " + Math.floor(window.innerWidth/40 + 40);
document.getElementById('opsz').value = Math.floor(window.innerWidth/40 + 40);

document.getElementById('opsz').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl';" + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; " + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
  document.getElementById('opszt').innerHTML = "Optical Size: " + document.getElementById('opsz').value;
}

document.getElementById('wght').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl';" + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; " + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
  document.getElementById('wghtt').innerHTML = "Weight: " + document.getElementById('wght').value;
}

document.getElementById('itlc').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl';" + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; " + "font-variation-settings: 'opsz' " + document.getElementById('opsz').value + ", 'wght' " + document.getElementById('wght').value + ";";
  }
}
