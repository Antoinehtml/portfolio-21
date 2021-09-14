// NAVBAR HAMBURGER ANIMATION

const hamburger = document.querySelector(".menu")
const menuPage = document.querySelector(".menu-page")
const initHamburger = () => {
	document.getElementById("hidden").style.display = "none";
	document.getElementById("lineUp").style.transform = "rotate(45deg)";
	document.getElementById("lineUp").style.margin = "0";
	document.getElementById("lineUp").style.position = "absolute";
	document.getElementById("lineDown").style.transform = "rotate(-45deg)";
	document.getElementById("menuPage").style.visibility = "visible";
	document.getElementById("menuPage").style.transform = "translateY(149px)";
}

const closeHamburger = () => {
	document.getElementById("hidden").style.display = "";
	document.getElementById("lineUp").style.transform = "";
	document.getElementById("lineUp").style.margin = "";
	document.getElementById("lineUp").style.position = "";
	document.getElementById("lineDown").style.transform = "";
	document.getElementById("menuPage").style.visibility = "";
	document.getElementById("menuPage").style.transform = "";
}


hamburger.addEventListener('mouseenter', (event) => {
	initHamburger()
})

menuPage.addEventListener('mouseleave', (event) => {
	closeHamburger()
})



// Display menu


// HOMEPAGE ANIMATION

gsap.from('.homepage-title', {duration: 6, opacity: 0, ease:"power1"})

// ABOUT ANIMATIONS

gsap.from(".image" , {
	scrollTrigger: {
		trigger: '.about',
		start: "top center"
	},
	x: -150,
	opacity: 0,
	duration: 2
})


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
		
		gsap.to(negative, {
		  duration: .8,
		  ease: "power1",
		  y: -250	  
		});
	})	

	language.addEventListener('mouseleave', (event) =>{	
		let negative = language.querySelector(".negative")
		
		gsap.to(negative, {
		  duration: .8,
		  ease: "power1",
		  y: 0	  
		});
	})	
})








// const circleSvg = document.querySelector('svg');

// window.addEventListener('mousemove', (event) => {
// 	circleSvg.style.top = event.clientY - 30;
// 	circleSvg.style.left = event.clientX - 30;
// });


