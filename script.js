// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const messageScreen = document.getElementById("message-container");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const openMessageBtn = document.getElementById("open-message");
const backToLetterBtn = document.getElementById("back-to-letter");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector("#letter-container .letter-window");
const messageWindow = document.querySelector("#message-container .letter-window");

// Open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Heheheheheh!!!";
  catImg.src = "cat_dance.gif";
  buttons.style.display = "none";
  finalText.style.display = "block";
  openMessageBtn.style.display = "inline-block";
  letterWindow.classList.add("final");
});

// NO button moves away
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Open message screen
openMessageBtn.addEventListener("click", () => {
  letter.style.display = "none";
  messageScreen.style.display = "flex";

  messageWindow.classList.remove("open");
  setTimeout(() => {
    messageWindow.classList.add("open");
  }, 50);
});

// Back to letter
backToLetterBtn.addEventListener("click", () => {
  messageScreen.style.display = "none";
  letter.style.display = "flex";
  letterWindow.classList.add("open");
});
