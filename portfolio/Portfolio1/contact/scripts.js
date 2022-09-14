/*function sendEmail() {
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
    }*/

//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

    //validate data
   function validateForm(){

clearMessages ();
let errorFlag = false;


    if(nameInput.value.length < 1){
      errorNodes[0].innerText = "Name cannot be blank";
      nameInput.classList.add("error-border");
      errorFlag = true;
    }

    if(!emailIsValid(email.value)){
      errorNodes[1].innerText = "Invalid email addess";
      nameInput.classList.add("error-border");
    }


    if(message.value.length < 1){
      errorNodes[2].innerText = "Please enter message";
      email.classList.add("error-border");
      errorFlag = true;
    }

    if(!errorFlag){
      success.innerText = "Success!";
    }
   }

   //Clear error /success messages

   function clearMessages() {
    for(let i=0; i < errorNodes.length; i++){
      errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
   }

   //check email validity

   function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
   }