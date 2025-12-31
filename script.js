// дни вместе
const startDate = new Date("2025-10-10");
const now = new Date();
const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("days").textContent = days;

// модалки
function openModal(id) {
    document.getElementById("modal" + id).style.display = "flex";
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// конфетти
function shootConfetti() {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
}
