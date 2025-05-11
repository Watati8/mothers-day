// Petal animation
const petalColors = ['#ffc9dd', '#ffe4ec', '#ffbfd6', '#ffdde7'];
const petalsContainer = document.querySelector('.petals');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.position = 'absolute';
  petal.style.top = '-20px';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${Math.random() * 10 + 10}px`;
  petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
  petal.innerHTML = '❀';
  petal.style.animation = `fall ${Math.random() * 3 + 5}s linear forwards`;

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 8000);
}

setInterval(createPetal, 400);

// Falling animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Music control
const audio = document.getElementById("background-music");
function toggleMusic() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
