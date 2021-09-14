// EMAILJS CONNECTION 

const sendMail = (params) => {
	let tempParams = {
		from_name: document.getElementById('contactName').value,
		from_email: document.getElementById('contactEmail').value,
		message: document.getElementById('contactSubject').value,
		sent_time: Date()
	}
	
	emailjs.send('service_n567xii', 'template_5aujubh', tempParams)
	.then(function(res){
		console.log("success", res.status);
	})
}

// POPUP ON SUBMIT CLICK

const submitButton = document.getElementById('submitButton')

const closePopup = () => {
	document.querySelector('.popup').style.visibility=" hidden";
}

submitButton.addEventListener('click', (event) => {
	document.querySelector('.popup').style.visibility = "visible"
	window.setTimeout("closePopup();", 4000);
})