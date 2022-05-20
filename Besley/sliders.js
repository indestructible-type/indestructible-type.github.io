document.getElementById('wght').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  document.getElementById('wghtt').innerHTML = "Weight: " + document.getElementById('wght').value;
}

document.getElementById('itlc').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  document.getElementById('wghtt').innerHTML = "Weight: " + document.getElementById('wght').value;
}

document.getElementById('wdth').oninput = function() {
  if (document.getElementById('itlc').value == 1) {
    document.getElementById('itlct').innerHTML = "Italic";
    document.getElementById('title').style = "font-family: 'Bodonivfitl'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  else {
    document.getElementById('itlct').innerHTML = "Roman";
    document.getElementById('title').style = "font-family: 'Bodonivf'; font-variation-settings: 'wght' " + document.getElementById('wght').value + ", 'wdth' " + document.getElementById('wdth').value + ";";
  }
  document.getElementById('wdtht').innerHTML = "Width: " + document.getElementById('wdth').value + "%";
}
