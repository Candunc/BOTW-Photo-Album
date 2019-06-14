function create_modal(offset) {
	modal.style.display = "block";
	modal_img.src = images[offset].getElementsByTagName("img")[0].src;
	//modal_caption.innerHTML = images[offset].getElementsByTagName("em")[0].innerHTML;
}

let modal = document.getElementById("modal");
let modal_img = document.getElementById("modal-img");
let modal_caption = document.getElementById("modal-caption");

let images = document.getElementsByClassName("photo");

for (var i = 0; i < images.length; i++) {
	images[i].onclick = (function(i) { return function(){create_modal(i)} })(i);
}

modal.onclick = function() {
	modal.style.display = "none";
}
