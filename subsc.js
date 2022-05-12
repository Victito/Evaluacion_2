const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	
	if(emailValue === '') {
		setErrorFor(email, 'Ingrese su email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	if (isEmail(emailValue)){
		alert("Se a Subscrito Correctamente!")
		window.location="index.html";
	}
}
function checkInputs2() {
	const emailValue = email.value.trim();
	
	if(emailValue === '') {
		setErrorFor(email, 'Ingrese su email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	if (isEmail(emailValue)){
		alert("Se a Cancelado su Subscripción!")
		window.location="index.html";
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}