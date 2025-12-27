const startDate = new Date("2025-10-10");

function updateDaysTogether() {
    const days = Math.floor((Date.now() - startDate) / 86400000);
    document.getElementById("days").textContent = days;
}
updateDaysTogether();

// Снег
function createSnowflake() {
    const snow = document.createElement("div");
    snow.innerText = "❄️";
    snow.style.position = "fixed";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.top = "-10px";
    snow.style.fontSize = Math.random() * 20 + 10 + "px";
    snow.style.opacity = Math.random();
    snow.style.animation = "fall linear 10s";
    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 10000);
}
setInterval(createSnowflake, 300);

// Конфетти
function shootSnowConfetti() {
    confetti({ particleCount: 150, spread: 120 });
}

// Модалки
function openModal(id) {
    document.getElementById("modal" + id).style.display = "flex";
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}
