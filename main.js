
new Typed(".text", {
    strings: ["","'m Photographer.","want to be a UX UI designer.","want to be a UX UI designer.","want to be a Web Designer."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });




const scrollers = document.querySelectorAll('.scroller');
function addAnimation() {
    scrollers.forEach((scrollers) => {
        scrollers.setAttribute("data-animated", true);

        const scrollersInner = scrollers.querySelector('.scroller__inner');
        const scrollersInnerContent = Array.from(scrollersInner.children);

        scrollersInnerContent.forEach(item => {
            const dupilcatedItem = item.cloneNode(true)
            dupilcatedItem.setAttribute('aria-hidden', true)
            scrollersInner.appendChild(dupilcatedItem)
        })
    })
}

addAnimation()

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
  const headerLinks = document.querySelectorAll(".menu-list a")
  headerLinks.forEach((elm) => {
    elm.addEventListener('click', (e) => {
        e.preventDefault()


        const targetId = elm.getAttribute("href")
        const targetElm = document.querySelector(targetId)
        const offset = 86

        const top = targetElm.getBoundingClientRect().top
        const elemOffsetPosition = top + window.pageYOffset - offset

        window.scrollTo({
          top: elemOffsetPosition,
          behavior: "smooth"
        })

        history.pushState({}, null, targetId)

        return false
    })
  })
})()