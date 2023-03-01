function SendMail() {
  event.preventDefault();
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  console.log(params);
  emailjs.sendForm("service_r6ebwfl", "template_9np62vi", params).then(
    function () {
      alert("Thank you for message ....");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  document.getElementById("contact-form").reset();
}

 
function sendMessage() {
  var message = encodeURIComponent("Hello, this is a test message.");
  var phoneNumber = "+918788046270"; // replace with the phone number you want to message
  var url = "https://wa.me/" + phoneNumber + "/?text=" + message;
  window.open(url);
}
