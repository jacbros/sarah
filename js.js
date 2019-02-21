/* Slideshow code taken from W3Schools: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp */

var slideIndex = 1;
showSlides(slideIndex);

// frem og tilbage controls//
function plusSlides(n) {
    showSlides(slideIndex += n);
    
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var slidei;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (slidei = 0; slidei < slides.length; slidei++) {
    slides[slidei].style.display = "none";
  }
  for (slidei = 0; slidei < dots.length; slidei++) {
    dots[slidei].className = dots[slidei].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function videoKontrol(elementId, visKontroller){
	if (visKontroller === 1){
		document.getElementById(elementId).setAttribute("controls", "");
	}else{
		document.getElementById(elementId).addEventListener("click", function(){
			if(document.getElementById(elementId).paused) {
				document.getElementById(elementId).play();
			}else{
				document.getElementById(elementId).pause();
			}
		});
	}
}

function visMusikliste(elementId, musikliste, coverliste, authorliste) {
    for (var i = 0; i < musikliste.length; i++) {
        document.getElementById(elementId).insertAdjacentHTML('afterbegin', '<div class="musikbox"><div class="coverbox"><img class="cover" src="' + coverliste[i] + '"></div><div class="infobox"><p class="sangtitel">'+titelliste[i]+'</p><p class="kunstner">' + authorliste[i] + '</p><hr><p><audio controls><source src="music/'+ musikliste[i]+'" type="audio/mpeg"></audio></p></div></div');
    }
}



// Hovedprogramdel

var titelliste = [
	"Åbent Hjerte",
	"Heterogeneous",
	"Star and the Moon"
];

var musikliste = [
    "aabenthjerte.mp3",
    "Heterogeneous.mp3",
    "starsandthemoon.mp3"
];
var authorliste = [
    "Sarah Thordsen Band",
    "Echoes In Veil",
    "Sarah Thordsen Band"
];
var coverliste = [
    "images/sarahband.jpg",
    "images/echoesinveil.jpg",
    "images/sarahband.jpg"
];

visMusikliste("musikliste", musikliste, coverliste, authorliste);

videoKontrol("video", 1);
