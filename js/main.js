function fades(){
	setTimeout(function() {
		//document.body.style.backgroundImage = 'url(img/cubey_cake-skull.jpg)';
		 document.querySelector('.image2').style.opacity = 1;
	},3000);

	setTimeout(function() {
		 document.querySelector('.image3').style.opacity = 1;
	},8000);

	setTimeout(function() {
		 document.querySelector('.image4').style.opacity = 1;
	},13000);

	setTimeout(function() {
		 document.querySelector('.image5').style.opacity = 1;
	},18000);

	setTimeout(function() {
		 document.querySelector('.image4').style.opacity = 0;
		 document.querySelector('.image3').style.opacity = 0;
		 document.querySelector('.image2').style.opacity = 0;
	},20000);

	setTimeout(function() {
		 document.querySelector('.image5').style.opacity = 0;
	},23000);

	setTimeout(fades,25000);
}

fades();