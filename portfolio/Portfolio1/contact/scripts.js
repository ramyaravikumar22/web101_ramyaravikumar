function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
//	Username : "Your Gmail Address",
//	Password : "Your Gmail Password",
	To : 'smrithibr.br@gmail.com',
	From : "ramya38br@gmail.com",
	Subject : "email subject",
	Body : "email body",
	}).then(
		message => alert("mail sent successfully")
	);
}