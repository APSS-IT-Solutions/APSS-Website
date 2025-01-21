/*JS for email service*/
const btn = document.getElementById("sendMessageButton");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_9n8rpf8";
    const templateID = "template_0ydazfn";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Your email has been sent! We'll be in touch shortly.!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
