document.getElementById("wght").oninput = function() {
  hams = (this.value - 100) / 800;
  sam = "black";
  if (this.value < 800) {
    sam = "heavy";
  }
  if (this.value < 700) {
    sam = "bold";
  }
  if (this.value < 600) {
    sam = "semi";
  }
  if (this.value < 500) {
    sam = "medium";
  }
  if (this.value < 400) {
    sam = "book";
  }
  if (this.value < 300) {
    sam = "light";
  }
  if (this.value < 200) {
    sam = "thin";
  }
  if (this.value < 110) {
    sam = "hairline";
  }
  document.getElementById("wght").style = "background-image: -webkit-gradient( linear, left top, right top, color-stop(" + hams + ", #666666), color-stop(" + hams + ", #f2f2f2))";
  document.getElementById("title").style = "font-variation-settings:'wght' " + this.value + ", 'ital' " + (document.getElementById("italic").value / 100) + ";" ;
  document.getElementById("disweight").innerHTML = "<br>weight: " + sam;
}

document.getElementById("italic").oninput = function() {
  hamy = this.value / 200;
  hany = this.value / 100;
  document.getElementById("italic").style = "background-image: -webkit-gradient( linear, left top, right top, color-stop(" + hamy + ", #666666), color-stop(" + hamy + ", #f2f2f2))";
  document.getElementById("title").style = "font-variation-settings:'wght' " + document.getElementById("wght").value + ", 'ital' " + hany + ";" ;
  document.getElementById("disitalic").innerHTML = "italic: " + this.value + "%" ;
}
