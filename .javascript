window.addEventListener('load', function() {
    const video = document.querySelector('.video-background');
    video.muted = true; // Ensure the video is muted for autoplay
    video.play().catch(error => {
        console.error("Autoplay failed:", error);
    });
});
