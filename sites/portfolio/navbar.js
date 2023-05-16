document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#navbar");
  let top = navbar.offsetTop;
  function floating() {
    if (window.scrollY > top) {
      navbar.classList.add("floating");
    } else {
      navbar.classList.remove("floating");
    }
  }
  window.addEventListener("scroll", floating);
});
