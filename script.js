const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

let items = [];
let angle = 0;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (items.length === 0) return;

    const slice = 2 * Math.PI / items.length;

    items.forEach((item, i) => {
        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#ffcc00" : "#ff9900";
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, angle + i * slice, angle + (i + 1) * slice);
        ctx.fill();

        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(angle + (i + 0.5) * slice);
        ctx.textAlign = "right";
        ctx.fillStyle = "#000";
        ctx.font = "16px Arial";
        ctx.fillText(item, 140, 10);
        ctx.restore();
    });
}

spinBtn.onclick = () => {
    const text = document.getElementById("items").value;
    items = text.split("\n").filter(i => i.trim() !== "");
    if (items.length === 0) {
        alert("Vui lòng nhập dữ liệu!");
        return;
    }

    const spinAngle = Math.random() * 2000 + 1000;
    let current = 0;

    const spin = setInterval(() => {
        angle += 0.1;
        current += 10;
        drawWheel();
        if (current >= spinAngle) {
            clearInterval(spin);
        }
    }, 20);
};
