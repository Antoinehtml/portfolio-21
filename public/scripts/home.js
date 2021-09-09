gsap.from('.right', {duration: 10, opacity: 0, ease:"power1"})
gsap.from('.img' , {duration: 2, opacity: 0, x: -300, delay: 2, ease:"circ"})
gsap.from('.h3' , {duration: 2, opacity: 0, y: -300, delay: 3, ease:"circ"})
gsap.from('.p' , {duration: 10, opacity: 0, delay: 3, ease:"power1"})

const circleSvg = document.querySelector('svg');

window.addEventListener('mousemove', (event) => {
	circleSvg.style.top = event.clientY - 30;
	circleSvg.style.left = event.clientX - 30;
});



