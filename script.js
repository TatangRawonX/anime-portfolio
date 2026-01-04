// ================= FADE IN =================
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

fades.forEach(el => observer.observe(el));

// ================= BGM SAFE =================
const bgmEl = document.getElementById("bgm");
const bgmBtn = document.getElementById("bgm-toggle");

if (bgmEl && bgmBtn) {
  bgmBtn.addEventListener("click", async () => {
    try {
      if (bgmEl.paused) {
        bgmEl.volume = 0.7;
        await bgmEl.play();
        bgmBtn.textContent = "🔊";
      } else {
        bgmEl.pause();
        bgmBtn.textContent = "🎵";
      }
    } catch (e) {
      console.error("BGM error:", e);
    }
  });
}

// ================= OPACITY SLIDER =================
const opacityRange = document.getElementById("opacityRange");

if (opacityRange) {
  opacityRange.addEventListener("input", (e) => {
    document.body.style.setProperty(
      "--overlay-opacity",
      e.target.value
    );
  });
}


