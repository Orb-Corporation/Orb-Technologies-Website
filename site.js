const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

function setNavigationOpen(open) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", open);
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    setNavigationOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) setNavigationOpen(false);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") setNavigationOpen(false);
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());