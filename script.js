// Fade animation
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));

// BGM toggle
const bgm = document.getElementById("bgm");
const btn = document.getElementById("bgm-toggle");

btn.addEventListener("click", async () => {
  try {
    if (bgm.paused) {
      bgm.volume = 0.25;
      await bgm.play();
      btn.textContent = "🔊";
    } else {
      bgm.pause();
      btn.textContent = "🎵";
    }
  } catch (err) {
    console.error("Audio error:", err);
    alert("Audio gagal diputar. Pastikan bgm.mp3 ada.");
  }
});


