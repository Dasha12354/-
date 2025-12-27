// Счётчик дней вместе (замени дату на вашу реальную!)
const startDate = new Date("2025-10-10"); // ←←←←←←←←← ИЗМЕНИ ЭТУ ДАТУ на день, когда вы начали встречаться!

function updateDaysTogether() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // дни
    const element = document.getElementById("daysTogether");
    
    if (element) {
        element.textContent = days;
    }
}

// Запускаем сразу и каждые 6 часов (чтобы не нагружать)
updateDaysTogether();
setInterval(updateDaysTogether, 1000 * 60 * 60 * 6);

// Падающий снег
setInterval(() => {
    const snow = document.createElement("div");
    snow.innerHTML = "❄️";
    snow.style.position = "fixed";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.top = "-20px";
    snow.style.fontSize = (10 + Math.random() * 20) + "px";
    snow.style.color = "white";
    snow.style.opacity = Math.random() * 0.8 + 0.2;
    snow.style.pointerEvents = "none";
    snow.style.animation = "fall 10s linear forwards";
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 10000);
}, 300);

// Снежное конфетти при нажатии
function shootSnowConfetti() {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#e0e0e0', '#ffcc00', '#ff6600'],
        shapes: ['circle'],
        ticks: 300
    });
}

// Модалки (как раньше)
function openModal(num) {
    document.getElementById("modal" + num).style.display = "flex";
}
function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// Музыка (если добавишь)
function playLoveSong() {
    document.getElementById("loveSong").play();
}