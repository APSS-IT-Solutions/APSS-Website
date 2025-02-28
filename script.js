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

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
console.log(carouselWidth);
var cardWidth = $(".carousel-item").width();
console.log(cardWidth);
var currentScrollPostion = 0;
$(".carousel-control-next").on("click", function () {
  currentScrollPostion = currentScrollPostion + cardWidth;
  $(".carousel-inner").animate({ scrollLeft: currentScrollPostion }, 600);
});
$(".carousel-control-prev").on("click", function () {
  currentScrollPostion = currentScrollPostion - cardWidth;
  $(".carousel-inner").animate({ scrollLeft: currentScrollPostion }, 600);
});
