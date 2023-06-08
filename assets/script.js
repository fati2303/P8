const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		
	},
	{ 
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		
		
	}
];

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;

    document.getElementById("slides").src = slides[numero].image;
	document.getElementById("tagline").innerHTML = slides[numero].tagLine;
	/*var dots=document.getElementsByClassName("dot");
	var dots_classe=dots.classList;
	console.log(dots_classe);
	dots.remove("dot_selected");*/
	//active.classList.add("dot_selected");
	/*Array.from(document.querySelectorAll('.dot.dot_selected')).forEach(
		(el) => el.classList.remove('dot_selected')
	  );*/
	  var dots=document.querySelectorAll(".dot");
	  dots.forEach((dot, index) => {
		
	    if (index==numero) {
			dot.classList.add('dot_selected');
			} 
		else {
			dot.classList.remove('dot_selected');
		}	
	  });
	var active= dots[numero];
	console.log(numero);

}
function changedot() {
	var dots=document.getElementById("dots");
	dots.classList.remove("dot_selected");
	dots.classList.add("dot_selected");
}
function displaydot() {
	slides.forEach((slide, index) => {
		var dots=document.getElementById("dots");
	    if (index==0) {
			dots.insertAdjacentHTML('beforeend',"<div class='dot dot_selected'></div>");
			} 
		else {
			dots.insertAdjacentHTML('beforeend',"<div class='dot'></div>");
		}	
	  });
}
