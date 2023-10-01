const navbar = document.querySelector('.navbar')
window.addEventListener("scroll", function() {
    navbar.classList.toggle("active", window.scrollY > 100)
});

const button = document.querySelector('.balik')
window.addEventListener("scroll", function () {
    button.classList.toggle("active", window.scrollY > 400);
});

/* Toggle to Unmute the Video */
function toggleMute() {
    let video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}