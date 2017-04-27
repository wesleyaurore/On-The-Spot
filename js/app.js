	/*----------------intro-----------------*/

	var body = document.querySelector('body');
	var accueil = document.querySelector('.accueil');
	var intro = document.querySelector('.intro');
	var mouv  = document.querySelector('.mouv');
	var logo = document.querySelector('h1.logintro');
	var art = document.querySelector('.art');
	var street = document.querySelector('.street');
	var str = document.querySelector('.pstr');
	var part = document.querySelector('.part');
	var	btn = document.querySelector('span');

	if (accueil) {
		accueil.style.display = 'none';
		body.style.overflow = 'hidden';
		window.setTimeout("start()", 1000);
		window.setTimeout("width()", 2500);
		window.setTimeout("strapp()", 2600);
		window.setTimeout("artapp()", 3100);
		window.setTimeout("large()", 4000);
		window.setTimeout("log()", 5500);
		window.setTimeout("appear()", 6500);
		window.setTimeout("logoff()", 8000);
	}
	function start() {
		mouv.style.width = '50%';
		mouv.style.backgroundColor = '#000';
	}

	function width() {
		mouv.style.left = '50%';
		mouv.style.backgroundColor = '#fff';
	};

	function artapp() {
		part.style.opacity = '1';	
	}

	function strapp() {
		str.style.opacity = '0';
	}

	function large() {
		mouv.style.backgroundColor = '#000';
		mouv.style.left = '0%';
		mouv.style.width = '100%';
		part.style.opacity = '0';
	};

	function log() {
		accueil.style.display = 'initial';
		logo.style.opacity = '1';
	};

	function appear() {
		art.style.display = 'none';
		street.style.display = 'none';
		mouv.style.left = '50%';
		mouv.style.width = '0%';
	};

	function logoff() {
		intro.style.display = 'none';
		body.style.overflow = "initial";
			// logo.style.opacity = '1';
		};

/*----------------carousel-----------------------*/

		var	oeuvres = document.querySelector('.oeuvres');
		var	next = document.querySelector('.next');
		var prev = document.querySelector('.prev')
		var	retour = document.querySelector('.retour');
		var li  = document.querySelectorAll('.carousel li');
		var i = 0;

		if (oeuvres) {
		
			if (i == 0) {
				prev.classList.add('hidden');
			}

			next.addEventListener('click', nextPics);
			prev.addEventListener('click', prevPics );

			function nextPics(){
				if (i < 6) {
					li[i].classList.remove('active');
					i++;
					li[i].classList.add('active');
				}

				if (i == 6) {
					next.classList.add('hidden');
					retour.classList.remove('hidden')
				}

				if (i > 0) {
					prev.classList.remove('hidden');
				}
			}	

				
			function prevPics(){
				if (i > 0) {
					li[i].classList.remove('active');
					i--;
					li[i].classList.add('active');
				}

				if (i < 6) {
					next.classList.remove('hidden');
					retour.classList.add('hidden');
				}

				if (i == 0) {
					prev.classList.add('hidden');
				}
			}
		}

/*---------------logo link------------------*/

var logoLink = document.querySelector('.logo-link');

	logoLink.style.width = '40px';
	console.log('yup');
	window.setTimeout("logoMin()", 9000);

	function logoMin() {
		logoLink.style.width = '';	
	}