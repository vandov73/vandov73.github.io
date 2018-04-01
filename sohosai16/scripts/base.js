function toggleSubmenu(id,id2){
	document.getElementById(id).classList.toggle("nodisplay");
	document.getElementById(id2).classList.toggle("opening");
	if(document.getElementById(id2).className.indexOf("opening")>=0){
		document.getElementById(id2).getElementsByTagName("img")[0].src = "img/arrow_down.svg";
	}else{
		document.getElementById(id2).getElementsByTagName("img")[0].src = "img/arrow_right.svg";
	}
}

function opened(){
	document.getElementById("menu").style.display = "inherit";
	document.getElementById("close").style.display = "inherit";
	document.getElementById("open").style.display = "none";
}

function closed(){
	document.getElementById("menu").style.display = "none";
	document.getElementById("close").style.display = "none";
	document.getElementById("open").style.display = "inherit";
	var elementlist = document.getElementsByClassName("subsection");
	for(var i=0;i<elementlist.length;i++){
		elementlist[i].classList.add("nodisplay");
	}
	var elementlist2 = document.getElementsByClassName("opening");
	var array = [];
	for(var i=0;i<elementlist2.length;i++){
		array[i] = elementlist2[i];
	}
	for(var i=0;i<array.length;i++){
		array[i].getElementsByTagName("img")[0].src = "img/arrow_right.svg";
		array[i].classList.remove("opening");
	}
}
