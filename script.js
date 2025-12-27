// Счётчик дней вместе
const startDate = new Date("2025-10-10"); // ←←←←←← ИЗМЕНИ НА ВАШУ ДАТУ!

function updateDays() {
    const days = Math.floor((Date.now() - startDate) / 86400000);
    document.getElementById("days").textContent = days;
}
updateDays();
setInterval(updateDays, 3600000);

// Модалки
function openModal(num) {
    document.getElementById("modal" + num).style.display = "flex";
}
function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// Конфетти при нажатии
function shootConfetti() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff66cc', '#cc66ff', '#ffffff', '#ff99ff'],
        ticks: 300
    });
}
