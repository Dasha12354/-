// ДНИ ВМЕСТЕ
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

// КОНФЕТТИ
function shootConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        colors: ['#ffffff', '#ffd700', '#c1121f', '#2a9d8f']
    });
}
