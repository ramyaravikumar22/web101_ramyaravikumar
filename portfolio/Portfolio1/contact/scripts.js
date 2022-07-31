function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "smrithibr.br@gmail.com",
        Password : "75260AF7C1C8F1F9A8ECFE000394D9C005D7",
        To : 'smrithi.ravikumar1993@gmail.com',
        From : "smrithibr.br@gmail.com",
        Subject : "Product manager interview",
        Body : "<html><h2>Hi Smrithi</h2><br.<strong>I hope you are having a great day.</strong><br></br><em>Italic</em></html>"
    }).then(
      alert("Email sent")
    );
    }