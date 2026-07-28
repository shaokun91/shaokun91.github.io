const navLinks = Array.from(document.querySelectorAll(".topnav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateLink = () => {
  const offset = 120;
  let current = sections[0]?.id;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top - offset <= 0) {
      current = section.id;
    }
  }

  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", active);
  });
};

window.addEventListener("scroll", activateLink, { passive: true });
window.addEventListener("load", activateLink);

document.documentElement.style.scrollBehavior = "smooth";

