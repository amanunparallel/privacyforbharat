// Menu Trigger

const menuTrigger = document.getElementById("menu_trigger");
const menuTarget = document.getElementById("menu_target");
const menuTriggerClose = document.getElementById("menu_cross");
const closeMenu1 = document.getElementById("link-menu-1");
const closeMenu2 = document.getElementById("link-menu-2");
const closeMenu3 = document.getElementById("link-menu-3");
const closeMenu4 = document.getElementById("link-menu-4");

function openMenuDesktop() {
  gsap.timeline().to(menuTarget, {
    delay: 0.1,
    duration: 1.2,
    ease: "power4.out",
    opacity: "1",
    transform: "translateX(0%)",
  });
  gsap.timeline().to(menuTriggerClose, {
    delay: 0.3,
    duration: 1.2,
    ease: "power4.out",
    rotation: 0,
  });
}
function CloseMenuDesktop() {
  gsap.timeline().to(menuTarget, {
    delay: 0.1,
    duration: 1.2,
    ease: "power4.out",
    opacity: "0",
    transform: "translateX(-100%)",
  });
  gsap.timeline().to(menuTriggerClose, {
    duration: 1.2,
    ease: "power4.out",
    rotation: "-45",
  });
}

// Menu OPEN
menuTrigger.addEventListener("click", (event) => {
  openMenuDesktop();
  console.log("menu Open");
});

// Close Menu
menuTriggerClose.addEventListener("click", (event) => {
  CloseMenuDesktop();
});
// Close menu on link Click-1
closeMenu1.addEventListener("click", (event) => {
  CloseMenuDesktop();
});
// Close menu on link Click-3
closeMenu2.addEventListener("click", (event) => {
  CloseMenuDesktop();
});
// Close menu on link Click-3
closeMenu3.addEventListener("click", (event) => {
  CloseMenuDesktop();
});
// Close menu on link Click-4
closeMenu4.addEventListener("click", (event) => {
  CloseMenuDesktop();
});
