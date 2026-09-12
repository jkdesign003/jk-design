document.addEventListener("DOMContentLoaded", function () {
  // Play only one video at a time.
  const videos = document.querySelectorAll("video");

  videos.forEach(function (video) {
    video.addEventListener("play", function () {
      videos.forEach(function (other) {
        if (other !== video) {
          other.pause();
        }
      });
    });

    // Disable right-click on videos.
    video.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  });

  // Reveal animation.
  // All .reveal elements are made visible safely; no missing menu elements
  // are referenced here.
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  // Footer year.
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
