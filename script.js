const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel__item");
const totalItems = items.length;
let angle = 0;
const angleStep = 360 / totalItems;

function updateCarousel() {
  items.forEach((item, index) => {
    const theta = (index * angleStep + angle) * (Math.PI / 180);
    const x = 300 * Math.sin(theta);
    const z = 300 * Math.cos(theta);
    item.style.transform = `translateZ(${z}px) translateX(${x}px)`;
    item.offsetHeight;
    item.style.transition = "transform 0.5s linear";
    item.style.transform = `translateZ(${z}px) translateX(${x}px)`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentVideoIndex = 0;

  function playVideo(index) {
    // Pause all videos
    videos.forEach(function (video) {
      video.pause();
    });

    // Play the video at the given index
    videos[index].play();
  }

  nextBtn.addEventListener("click", function () {
    // Move to the next video index, looping back to the start if at the end
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Play the next video
    playVideo(currentVideoIndex);
  });

  prevBtn.addEventListener("click", function () {
    // Move to the previous video index, looping to the end if at the start
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;

    // Play the previous video
    playVideo(currentVideoIndex);
  });
});

document.getElementById("next").addEventListener("click", () => {
  angle -= angleStep;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  angle += angleStep;
  updateCarousel();
});

updateCarousel();
