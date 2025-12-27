// Счётчик дней вместе (ИЗМЕНИ ДАТУ НА ВАШУ!)
const startDate = new Date("2025-10-10"); // ←←←←←← ИЗМЕНИ НА ДАТУ НАЧАЛА ОТНОШЕНИЙ!

function updateDaysTogether() {
    const days = Math.floor((Date.now() - startDate) / 86400000);
    document.getElementById("days").textContent = days;
}
updateDaysTogether();
setInterval(updateDaysTogether, 3600000);

// Падающий снег
function createSnowflake() {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.innerHTML = ["❄️", "❅", "❆"][Math.floor(Math.random()*3)];
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (5 + Math.random() * 10) + "s";
    snow.style.opacity = Math.random() * 0.6 + 0.4;
    snow.style.fontSize = (10 + Math.random() * 20) + "px";
    document.querySelector(".snow-container").appendChild(snow);
    setTimeout(() => snow.remove(), 15000);
}
setInterval(createSnowflake, 200);

// Снежное конфетти
function shootSnowConfetti() {
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#e0e0e0', '#ffd700'],
        shapes: ['circle'],
        ticks: 400
    });
}

// Модалки
function openModal(num) {
    document.getElementById("modal" + num).style.display = "flex";
}
function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}
