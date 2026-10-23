"use strict";

function initHeader() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (!header || !toggle || !menu) return;

  let previousY = window.scrollY;
  let ticking = false;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    menu.classList.remove("is-open");
    header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    menu.classList.add("is-open");
    header.classList.add("menu-open");
    document.body.classList.add("menu-open");
  };

  toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  const updateHeader = () => {
    const currentY = window.scrollY;
    header.classList.toggle("is-scrolled", currentY > 24);

    const headerLine = header.getBoundingClientRect().height;
    const sections = document.querySelectorAll("main > section");
    const activeSection = Array.from(sections).find((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= headerLine && bounds.bottom > headerLine;
    });
    const darkSections = new Set(["inicio", "presenca-local", "contato-final"]);
    header.classList.toggle("is-light", activeSection ? !darkSections.has(activeSection.id) : currentY > 24);

    if (toggle.getAttribute("aria-expanded") !== "true") {
      if (currentY > 140 && currentY > previousY + 4) {
        header.classList.add("is-hidden");
      } else if (currentY < previousY - 3 || currentY <= 24) {
        header.classList.remove("is-hidden");
      }
    } else {
      header.classList.remove("is-hidden");
    }

    previousY = currentY;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
    updateHeader();
  }, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!items.length || reduceMotion || !("IntersectionObserver" in window)) return;

  items.forEach((item) => {
    const delay = Number(item.getAttribute("data-reveal-delay"));
    if (Number.isFinite(delay) && delay > 0) {
      item.style.setProperty("--reveal-delay", `${Math.min(delay, 500)}ms`);
    }
  });

  document.documentElement.classList.add("js-reveal");

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });

  items.forEach((item) => observer.observe(item));
}

function initAccordion() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const questions = Array.from(accordion.querySelectorAll(".faq-question"));

    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const wasExpanded = question.getAttribute("aria-expanded") === "true";

        questions.forEach((otherQuestion) => {
          const panelId = otherQuestion.getAttribute("aria-controls");
          const panel = panelId ? document.getElementById(panelId) : null;
          otherQuestion.setAttribute("aria-expanded", "false");
          if (panel) panel.hidden = true;
        });

        if (!wasExpanded) {
          const panelId = question.getAttribute("aria-controls");
          const panel = panelId ? document.getElementById(panelId) : null;
          question.setAttribute("aria-expanded", "true");
          if (panel) panel.hidden = false;
        }
      });
    });
  });
}

function initNetwork() {
  const canvas = document.querySelector("[data-network-canvas]");
  const hero = canvas && canvas.closest(".hero");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || !hero || reduceMotion) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const lowPower = window.matchMedia("(max-width: 560px)").matches ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  const particleLimit = lowPower ? 18 : 34;
  const particles = [];
  let width = 0;
  let height = 0;
  let visible = false;
  let lastFrame = 0;
  let animationFrame = 0;

  const resize = () => {
    const bounds = hero.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles.length = 0;
    const count = Math.min(particleLimit, Math.max(10, Math.floor(width / 34)));
    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.4 + 0.7
      });
    }
  };

  const draw = (timestamp) => {
    animationFrame = 0;
    if (!visible || document.hidden) return;
    if (timestamp - lastFrame < 32) {
      animationFrame = window.requestAnimationFrame(draw);
      return;
    }
    lastFrame = timestamp;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(165, 197, 245, 0.58)";
      context.fill();

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 115) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(139, 179, 240, ${(1 - distance / 115) * 0.23})`;
          context.lineWidth = 0.7;
          context.stroke();
        }
      }
    });

    animationFrame = window.requestAnimationFrame(draw);
  };

  const start = () => {
    if (visible && !document.hidden && !animationFrame) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible) start();
    else if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  }, { threshold: 0 });

  resize();
  observer.observe(hero);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    } else {
      start();
    }
  });

  window.addEventListener("resize", resize, { passive: true });
}

function initYear() {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initAccordion();
  initNetwork();
  initYear();
});
