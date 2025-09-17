// Wymaga: npm install canvas
const { createCanvas } = require("canvas");
const fs = require("fs");

function generateFavicon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, "#667eea");
  gradient.addColorStop(1, "#764ba2");

  // Zaokrąglone rogi
  const radius = size * 0.15;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.fill();

  // Ikona
  ctx.fillStyle = "white";
  ctx.font = `bold ${size * 0.6}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("▣", size / 2, size / 2 + size * 0.05);

  // Zapisz
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(`public/favicon-${size}x${size}.png`, buffer);
}

// Generuj różne rozmiary
[16, 32, 48, 64, 128, 180, 192, 512].forEach((size) => {
  generateFavicon(size);
  console.log(`Generated favicon-${size}x${size}.png`);
});
