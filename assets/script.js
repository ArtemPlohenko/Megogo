document.addEventListener("DOMContentLoaded", function () {
  new fullpage("#fullpage", {
    autoScrolling: true,
    fitToSection: true,
    scrollHorizontally: true,
  });

  document.getElementById("scroll-btn").addEventListener("click", function () {
    fullpage_api.moveSectionDown();
  });
});
