gsap.from('.right', {duration: 10, opacity: 0, ease:"power1"})


const circleSvg = document.querySelector('svg');

window.addEventListener('mousemove', (event) => {
	circleSvg.style.top = event.clientY - 30;
	circleSvg.style.left = event.clientX - 30;
});



