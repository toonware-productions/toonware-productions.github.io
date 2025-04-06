const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;

    const color = document.getElementById("color").value;
    const size = document.getElementById("brush-size").value;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ⬇️ NEW: Download function
function downloadDrawing() {
    const link = document.createElement("a");
    link.download = "toonware-drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
