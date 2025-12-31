// ===== ДНИ ВМЕСТЕ =====
const startDate = new Date("2025-10-10");

function updateDays() {
    const days = Math.floor((Date.now() - startDate) / 86400000);
    document.getElementById("days").textContent = days;
}
updateDays();

// ===== ПИСЬМО =====
const letter =
"Ты — мой самый тёплый человек. С тобой зима становится уютной, " +
"а Новый год — настоящим чудом. Я люблю тебя 🤍";

let index = 0;
function startTyping() {
    const el = document.getElementById("typeText");
    el.textContent = "";
    index = 0;

    const interval = setInterval(() => {
        el.textContent += letter[index];
        index++;
        if (index >= letter.length) clearInterval(interval);
    }, 45);
}

// ===== МОДАЛКИ =====
function openModal(id) {
    document.getElementById("modal" + id).style.display = "flex";
    if (id === 1) startTyping();
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// ===== СНЕГ + СЕРДЦА =====
function createParticle() {
    const el = document.createElement("div");
    el.className = "particle";

    const isHeart = Math.random() > 0.75;
    el.innerText = isHeart ? "❤️" : "❄️";

    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (12 + Math.random() * 26) + "px";
    el.style.opacity = Math.random();
    el.style.animationDuration = (6 + Math.random() * 10) + "s";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 16000);
}
setInterval(createParticle, 100);

// ===== КОНФЕТТИ =====
function shootConfetti() {
    confetti({
        particleCount: 200,
        spread: 140,
        origin: { y: 0.6 }
    });
}
