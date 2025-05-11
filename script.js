// Music Control
function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Falling Roses / Petals
function createParticles(type) {
  const canvas = document.getElementById(type);
  const ctx = canvas.getContext('2d');
  let particles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = type === 'roses' ? ['#FFB6C1', '#FF69B4'] : ['#FFC0CB', '#FFDAB9'];
  const emojis = type === 'roses' ? ['🌹'] : ['🌸', '💮'];

  for (let i = 0; i < 30; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 24 + Math.random() * 10,
      speed: 1 + Math.random() * 1,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }

  animate();
}

if (document.getElementById('roses')) createParticles('roses');
if (document.getElementById('petals')) createParticles('petals');
