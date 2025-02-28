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

var servicesCarouselWidth = $(".serviceSection .carousel-inner")[0].scrollWidth;

var servicesCardWidth = $(".serviceSection .carousel-item").width();

var currentServicesScrollPostion = 0;
$(".serviceSection .carousel-control-next").on("click", function () {
  currentServicesScrollPostion =
    currentServicesScrollPostion + servicesCardWidth;
  $(".serviceSection .carousel-inner").animate(
    { scrollLeft: currentServicesScrollPostion },
    600
  );
});
$(".serviceSection .carousel-control-prev").on("click", function () {
  currentServicesScrollPostion =
    currentServicesScrollPostion - servicesCardWidth;
  $(".serviceSection .carousel-inner").animate(
    { scrollLeft: currentServicesScrollPostion },
    600
  );
});

var carouselWidth = $(".workflowBg .carousel-inner")[0].scrollWidth;
console.log(carouselWidth);
var cardWidth = $(".workflowBg .carousel-item").width();
console.log(cardWidth);
var currentScrollPostion = 0;
$(".workflowBg .carousel-control-next").on("click", function () {
  currentScrollPostion = currentScrollPostion + cardWidth;
  $(".workflowBg .carousel-inner").animate(
    { scrollLeft: currentScrollPostion },
    600
  );
});
$(".workflowBg .carousel-control-prev").on("click", function () {
  currentScrollPostion = currentScrollPostion - cardWidth;
  $(".workflowBg .carousel-inner").animate(
    { scrollLeft: currentScrollPostion },
    600
  );
});
