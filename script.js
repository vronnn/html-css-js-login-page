const slider = document.querySelectorAll("#slider a");
// console.log(slider);
slider.forEach(function (element) {
  element.addEventListener("click", (e) => {
    slider.forEach(function (el) {
      el.classList.remove("current-slide");
    });
    e.target.classList.add("current-slide");
  });
});
