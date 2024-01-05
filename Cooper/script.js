window.onload = function() {
	document.getElementById("title-background").style = "background-image: url(\"background/"+Math.floor(Math.random() * 21)+".jpg\");"
	document.getElementById("title-background").classList.add("filtered")
	for (let i = 0; i < 21; i++) {
		let img = new Image()
		img.src = "background"+i+".jpg"
	}
}

function slider(value) {
	document.getElementById("logotype").style = "font-weight: " + value + ";"
	document.getElementById("title-background").style = "background-image: url(\"background/"+Math.floor(Math.random() * 21)+".jpg\");"
}
