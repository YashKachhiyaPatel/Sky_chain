const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");

    formStatus.textContent = `Thank you, ${name}. Your message has been received. Our team will contact you shortly.`;
    form.reset();
  });
}

const revealTargets = document.querySelectorAll(
  ".feature-card, .bullet-panel, .team-card, .contact-panel, .contact-form, .hero-stats li, .info-panel"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((element) => {
    element.setAttribute("data-reveal", "");
    observer.observe(element);
  });
} else {
  revealTargets.forEach((element) => {
    element.classList.add("revealed");
  });
}
