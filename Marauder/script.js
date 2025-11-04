function parallax() {
	var position = (window.scrollY/1.75)
	document.getElementById("sky").style = "top: "+position+"px;" 
}

window.onload = function() {
	var h1 = document.querySelector("h1")
	var size = window.getComputedStyle(h1, null).getPropertyValue('font-size').slice(0, -2)
	h1.style = "font-variation-settings: 'opsz' "+size/2+";"
}

function slider (id, value) {
	document.getElementById(id).style = "font-variation-settings: '"+id+"' "+value+";"
	if (id == "opsz") {
		document.getElementById("opszl").style = "font-size: "+2*value+"px;"
	}
}
