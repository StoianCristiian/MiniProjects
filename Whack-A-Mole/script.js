const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const resetBtn = document.getElementById('reset');

let score=0;
let timeLeft=30;
let activeHole;
let gameInterval;
let timer;

function randomHole()
{
  holes.forEach(hole => hole.classList.remove('active'));
  const randomIndex = Math.floor(Math.random() * holes.length);

  activeHole = holes[randomIndex];
  activeHole.classList.add('active');
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if(hole === activeHole) {
      score++;
      scoreDisplay.textContent = score;
      activeHole.classList.remove('active');
      activeHole = 0;
    }
  });
});

resetBtn.addEventListener('click', () => restartGame());

function startGame() {
  gameInterval = setInterval(randomHole, 800);
  timer = setInterval(() => {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;

    if(timeLeft === 0){
      clearInterval(timer);
      clearInterval(gameInterval);
      holes.forEach(hole => hole.classList.remove('active'));
      alert(`Jocul s-a terminat! Scorul tau este: ${score}`);
      activeHole = 0;
    }
  }, 1000);
}

function restartGame()
{
  timeLeft = 0;
  clearInterval(gameInterval);
  clearInterval(timer);
  if(timeLeft === 0){
    holes.forEach(hole => hole.classList.remove('active'));
    score = 0;
    scoreDisplay.textContent = score;
    timeLeft = 30;
    timeLeftDisplay.textContent = timeLeft;

    activeHole = null;
    startGame();
  }
}

startGame();