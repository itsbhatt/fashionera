// image slider
	var current = 0;
function slide() {
	var bannerImg = document.getElementsByClassName('bannerImg');
	var len = bannerImg.length;

	for (var i = 0; i<len; i++) {
		bannerImg[i].style.opacity=0;
	}

	if (current != len-1) {
		current++;
	} else {
		current = 0;
	}

	bannerImg[current].style.opacity = 1;
}

function preSlide() {

	var bannerImg = document.getElementsByClassName('bannerImg');
	var len = bannerImg.length;for (var i = 0; i<len; i++) {
		bannerImg[i].style.opacity=0;
	}

	if (current<=0) {
		current = len-1;
	}


	if (current <= len-1) {
		current--;
	}

	bannerImg[current].style.opacity = 1;

	console.log(current);
}



	var num = true;
function toggler() {
	var toggle = document.getElementById('toggle');
	var pageOverlay = document.getElementById('page-overlay');

	if (num == true) {
		toggle.style.left = 0;
		pageOverlay.style.display = "block";
		document.body.classList.add("stop-scroll");
		num = false;
	} else {
		toggle.style.left = "-300px";
		pageOverlay.style.display = "none";
		document.body.classList.remove ("stop-scroll");
		num = true;
	}


}


setInterval("slide()",5000);


