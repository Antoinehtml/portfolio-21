gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

/* Main navigation */

const panelsSection = document.querySelector("#panels");
const panelsContainer = document.querySelector("#scroll");
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));
    if(targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: {
          y: containerOffset,
          autoKill: false
        },
        duration: 1
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false
        },
        duration: 1
      });
    }
  });
});


// HORIZONTAL SCROLL 

let scroll = document.getElementById("scroll")
let about = document.getElementById("about")

gsap.to(scroll, {
  xPercent: -50,
  ease: "power1",
  scrollTrigger: {
    trigger: scroll,
    pin: true,
    scrub: 0,
    snap:{
    	snapTo: about, duration: 0.7, ease: "power1.inOut"
    },
    end: () => "+=" + document.getElementById('languages').offsetWidth
  }
})

// NAVBAR HAMBURGER ANIMATION

const hamburger = document.querySelector(".menu")

hamburger.addEventListener('click', (event) => {
	let cardContainer = document.querySelector('.menu-page');
  cardContainer.classList.toggle('visible-menu')
  hamburger.classList.toggle('openmenu')
})



// NAV ANIMATIONS MOBILE

// DISAPPEARING

const disAnimationNavbar = () => {
	if(window.matchMedia("(max-width: 700px)").matches){
		gsap.to(".name" , {
			scrollTrigger: {
				trigger: '.about',
				start: "center center"
			},
			duration: 1,
			opacity: 0,
			ease: "power2"
		})

		gsap.to("#line-navbar" , {
			scrollTrigger: {
				trigger: '.about',
				start: "center center"
			},
			duration: 1,
			opacity: 0
		})
	}
}

disAnimationNavbar();

// REAPPEARING


// HOMEPAGE ANIMATION

gsap.from('.homepage-title', {duration: 6, opacity: 0, ease:"power1"})


// title anim

let el = document.getElementById('turbulence');
let title = document.querySelector('.homepage-title')

tl = new TimelineMax({paused: true});

createHoverTimeline = ()=> {	
	tl.to(el, 5, {attr: { baseFrequency: '0 0' }, repeat: -1})	
}

tl.play();

title.addEventListener('mouseenter' , (event) => {
	title.classList.toggle('filter')
	createHoverTimeline()
})

title.addEventListener('mouseleave' , (event) => {
	title.classList.toggle('filter')
	createHoverTimeline()
})

// ABOUT ANIMATIONS

const resizeAbout = () => {
	if(window.matchMedia("(min-width: 700px)").matches){
		gsap.from(".image" , {
			scrollTrigger: {
				trigger: '.about',
				start: "center center"
			},
			x: -150,
			opacity: 0,
			duration: 2
		})
	} else {
			gsap.from(".image" , {
				scrollTrigger: {
					trigger: '.about',
					start: "center center"
				},
				x: -150,
				opacity: 0,
				duration: 2
			})
		}
}

resizeAbout();


gsap.from(".antoine" , {
	scrollTrigger: {
		trigger: '.about',
		start: "top center"
	},
	y: -150,
	opacity: 0,
	duration: 2
})

gsap.from(".p" , {
	scrollTrigger: {
		trigger: '.about',
		start: "top center"
	},
	x: 150,
	opacity: 0,
	duration: 2
})

// LANGUAGES ANIMATIONS

gsap.to(".title-language", {
  duration: 7,
  ease: "none",
  x: "+=500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});

const languages = document.querySelectorAll(".language")

languages.forEach((language) => {
	language.addEventListener('mouseenter', (event) =>{	
		let negative = language.querySelector(".negative")
		negative.parentElement.style.border = "none"
		
		gsap.to(negative, {
		  duration: .8,
		  ease: "power1",
		  y: -250	  
		});
	})	

	language.addEventListener('mouseleave', (event) =>{	
		let negative = language.querySelector(".negative")
		negative.parentElement.style.border = "1px solid #fff"
		
		gsap.to(negative, {
		  duration: .8,
		  ease: "power1",
		  y: 0	  
		});
	})	
})

const resizeLanguage = () => {
	if(window.matchMedia("(min-width: 700px)").matches){
		gsap.from(".language" , {
			scrollTrigger: {
				trigger: '.languages-header',
				start: "top top"
			},
			x: -150,
			ease: "power1",
			opacity: 0,
			duration: 1
		})
	} else {
		gsap.from(".language" , {
			scrollTrigger: {
				trigger: '.about',
				start: "bottom center"
			},
			x: -150,
			delay: .2,
			ease: "power1",
			opacity: 0,
			duration: 1
		})
	} 
}

resizeLanguage()


// TIME ON FOOTER

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();


// POSITION NAVBAR WITHOUT FOOTER

// const navFloat = document.querySelector('.nav')
// const footer = document.querySelector('.footer')
// const languagesPage = document.querySelector('.languages')


// const checkOffset = () => {
// 	function getRectTop(el){
// 		const rect = el.getBoundingClientRect();
// 		return rect.top ;
// 	}
// 	if((getRectTop(navFloat) + document.body.scrollTop) + navFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 700)
//     navFloat.style.position = 'absolute';
//   if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
//     navFloat.style.position = 'fixed'; // restore when you scroll up


// }

// document.addEventListener('scroll', function(){
// 	checkOffset()
// })

// CURSOR
// const circleSvg = document.querySelector('svg');

// window.addEventListener('mousemove', (event) => {
// 	circleSvg.style.top = event.clientY - 30;
// 	circleSvg.style.left = event.clientX - 30;
// });


