window.addEventListener("scroll", function() {
    var backToTopButton = document.querySelector(".back-to-top");
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  var backToTopButton = document.querySelector(".back-to-top");
  backToTopButton.addEventListener("click", scrollToTop);