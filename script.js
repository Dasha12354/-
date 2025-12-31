// ДНИ
const startDate = new Date("2025-10-10");
function updateDays() {
    const days = Math.floor((Date.now() - startDate) / 86400000);
    document.getElementById("days").textContent = days;
}
updateDays();

// МОДАЛКИ
function openModal(n) {
    document.getElementById("modal" + n).style.display = "flex";
}
function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// СНЕГ
setInterval(() => {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.textContent = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 5 + Math.random() * 10 + "s";
    document.getElementById("snow").appendChild(snow);
    setTimeout(() => snow.remove(), 15000);
}, 200);

// СЕРДЦА
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 8 + "s";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
}, 600);

// КОНФЕТТИ
function shootConfetti() {
    confetti({
        particleCount: 200,
        spread: 120,
        colors: ['#ffffff', '#ffd700', '#c1121f', '#2a9d8f']
    });
}
