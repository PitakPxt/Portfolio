new Typed(".text", {
  strings: [
    "",
    "'m Photographer.",
    "",
    "want to be a Web Designer.",
    "",
    "want to be a Web Developer.",
    "",
    "want to be a Fontend Developer.",
    "",
    "want to be a UXUI Designer.",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const scrollers = document.querySelectorAll(".scroller");
function addAnimation() {
  scrollers.forEach((scrollers) => {
    scrollers.setAttribute("data-animated", true);

    const scrollersInner = scrollers.querySelector(".scroller__inner");
    const scrollersInnerContent = Array.from(scrollersInner.children);

    scrollersInnerContent.forEach((item) => {
      const dupilcatedItem = item.cloneNode(true);
      dupilcatedItem.setAttribute("aria-hidden", true);
      scrollersInner.appendChild(dupilcatedItem);
    });
  });
}

addAnimation();

const menuBtn = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelectorAll(".menu-link-overlay a");

const closeOverlay = () => {
  menuOverlay.classList.remove("opened");
  document.body.style.paddingRight = "0";
};

links.forEach((elm) => {
  elm.addEventListener("click", closeOverlay);
});

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("opened");
});

closeBtn.addEventListener("click", closeOverlay);

(() => {
  const headerLinks = document.querySelectorAll(
    ".menu-list a, .menu-link-overlay a"
  );

  headerLinks.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = elm.getAttribute("href");
      const targetElm = document.querySelector(targetId);

      const offset = 100;

      const top = targetElm.getBoundingClientRect().top;
      const elemOffsetPosition = top + window.scrollY - offset;

      window.scrollTo({
        top: elemOffsetPosition,
        behavior: "smooth",
      });

      history.pushState({}, null, targetId);

      return false;
    });
  });
})();

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#d5d6d8",
  "#96979e",
  "#595a60",
  "#54555b",
  "#4f5055",
  "#4a4b50",
  "#45464b",
  "#404146",
  "#3c3c40",
  "#37373a",
  "#323235",
  "#2d2d30",
  "#2d2d30",
  "#1e1e20",
  "#19191b",
  "#141415",
  "#0f0f10",
  "#0f0f10",
  "#050506",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
