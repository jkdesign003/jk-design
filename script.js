```javascript
// JK DESIGN
// Simple website interactions

document.addEventListener("DOMContentLoaded", () => {

    // Fade-in animation when elements enter the screen

    const cards = document.querySelectorAll(
        ".video-card, .service-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.7s ease";

        observer.observe(card);

    });


    // Stop other videos when a new video starts playing

    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {

        video.addEventListener("play", () => {

            videos.forEach((otherVideo) => {

                if (otherVideo !== video) {
                    otherVideo.pause();
                }

            });

        });

    });

});
```
