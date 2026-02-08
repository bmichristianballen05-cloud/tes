let hasStarted = false;

function startIntro() {
  if (hasStarted) return;
  hasStarted = true;

  const apple = document.getElementById("falling-apple");
  const navApple = document.getElementById("nav-apple-logo");
  const loader = document.getElementById("loader");
  const main = document.querySelector(".main-content");

  if (!apple || !navApple || !loader || !main) {
    console.error("Intro elements missing");
    return;
  }

  // STEP 1 — Apple falls to center
  apple.style.transform = "translateY(0)";

  // STEP 2 — Fly into navbar logo
  setTimeout(() => {
    const appleRect = apple.getBoundingClientRect();
    const navRect = navApple.getBoundingClientRect();

    const moveX = navRect.left - appleRect.left;
    const moveY = navRect.top - appleRect.top;

    apple.style.transform =
      `translate(${moveX}px, ${moveY}px) scale(0.25)`;
    apple.style.opacity = "0";

    navApple.style.opacity = "1";
  }, 1000);

  // STEP 3 — Remove loader & reveal site
  setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflow = "auto";
    main.style.opacity = "1";
  }, 1800);
}

// Trigger on FIRST scroll / touch only
window.addEventListener("wheel", startIntro, { once: true });
window.addEventListener("touchstart", startIntro, { once: true });
