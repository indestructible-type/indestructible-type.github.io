var slider = document.getElementById("time");
var output = document.getElementById("TOTD");
var sliders = document.getElementById("distance");
var outputs = document.getElementById("TOTD");
document.getElementById("time").value = 0;
var d = new Date();

function calcHour(i) {
    if (i < 6) {
        i = 12 + i;
    }
    if (i > 18) {
        i = i - 12;
    }
    return i;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function addSpace(i) {
    if (i < 10) {
        i = "~" + i;
    }
    return i;
}

function fixHour(i) {
  if (i > 12) {
    i = i - 12;
  }
  return i;
}

function createTimeH(i) {
  i = ((i / 1000) * 12) + 6;
  return i;
}

function createTimeM(i) {
    i = i - 6;
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  if (i >= 1) {
    i = i - 1;
  }
  i = i * 60;
  return i;
}

document.getElementById("time").value = ((calcHour(d.getHours() + (d.getMinutes()/60)) - 6) / 12) * 1000;
document.getElementById("TOTD").style = "font-weight: normal; font-variation-settings:'TOTD' " + document.getElementById("time").value + ", 'DIST' " + sliders.value + ";";
document.getElementById("time").style = "background-image: -webkit-gradient( linear, left top, right top, color-stop(" + (slider.value / 1000) + ", #ff0066), color-stop(0" + (slider.value / 1000) + "5, #ffffff));";
document.getElementById("displaytime").innerHTML = addSpace(fixHour(calcHour(d.getHours()))) + ":" + addZero(d.getMinutes());
document.getElementById("displaydistance").innerHTML = 100 + "%";
document.getElementById("bak").style = "font-weight: normal; font-variation-settings:'TOTD' " + document.getElementById("time").value + ", 'DIST' " + sliders.value + ";";
document.getElementById("baks").style = "font-weight: normal; font-variation-settings:'TOTD' " + document.getElementById("time").value + ", 'DIST' " + sliders.value + ";";
document.getElementById("bakss").style = "font-weight: normal; font-variation-settings:'TOTD' " + document.getElementById("time").value + ", 'DIST' " + sliders.value + ";";

slider.oninput = function() {
  num = (slider.value / 1002) + 0.002;
  output.innerHTML = "<b style=\"font-weight: normal; font-variation-settings:'TOTD' " + this.value + ", 'DIST' " + sliders.value + ";\">GNOMON*</b>";
  document.getElementById("time").style = "background-image: -webkit-gradient( linear, left top, right top, color-stop(" + num + ", #ff0066), color-stop(0" + num + ", #ffffff));";
  document.getElementById("displaytime").innerHTML = addSpace(fixHour(Math.trunc(createTimeH(slider.value)))) + ":" + addZero(Math.trunc(createTimeM(createTimeH(slider.value))));
}

sliders.oninput = function() {
  nums = (sliders.value / 1002) + 0.002;
  output.innerHTML = "<b style=\"font-weight: normal; font-variation-settings:'TOTD' " + slider.value + ", 'DIST' " + this.value + ";\">GNOMON*</b>";
  document.getElementById("distance").style = "background-image: -webkit-gradient( linear, left top, right top, color-stop(" + nums + ", #ff0066), color-stop(0" + nums + ", #ffffff));";
  butter = document.getElementById("distance").value / 3.333333333;
  document.getElementById("displaydistance").innerHTML = Math.trunc(butter) + "%";
}
