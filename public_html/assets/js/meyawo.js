// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

function handleSocialLinkClick(event) {
  event.preventDefault();
  const platform = event.currentTarget.getAttribute("data-platform");
  switch (platform) {
    case "facebook":
      window.location.href = "https://www.facebook.com/navindu.karunarathne";
      break;
    case "github":
      window.location.href = "https://github.com/navindusankalpa";
      break;
    case "google":
      window.location.href = "https://plus.google.com/yourusername";
      break;
    case "pinterest":
      window.location.href = "https://www.pinterest.com/yourusername";
      break;
    case "instagram":
      window.location.href = "https://www.instagram.com/navindu.karunarathne";
      break;
    case "rss":
      window.location.href = "https://yourrssfeedurl.com";
      break;
    default:
      console.log("Unknown platform:", platform);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".social-links a").forEach((link) => {
    link.addEventListener("click", handleSocialLinkClick);
  });
  document.getElementById("downloadCV").addEventListener("click", (event) => {
    event.preventDefault();
    window.open("./public_html/assets/res/my_cv.pdf", "_blank");
  });
  document.getElementById("mailMe").addEventListener("click", (event) => {
    event.preventDefault();
    window.open("mailto:navindukarunarathne1@gmail.com", "_self");
  });
  document.getElementById("visitFP").addEventListener("click", (event) =>{
    event.preventDefault();
    window.open("smartliving.html", "_blank");
  })
});
