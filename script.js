document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements on scroll using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to elements that should reveal
  const revealElements = document.querySelectorAll(".project-card");
  revealElements.forEach((el) => observer.observe(el));

  // Optional: Log successful load for debugging
  console.log("Portfolio script loaded successfully.");
});
