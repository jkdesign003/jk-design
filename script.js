document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  // Only one video plays at a time
  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });

    // Disable right-click on videos
    video.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  });
});
