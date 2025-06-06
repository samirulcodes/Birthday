
const riddles = [
  {
    riddle: "The sky is blue.",
    answer: "true"
  },
  {
    riddle: "Water boils at 50 degrees Celsius at sea level.",
    answer: "false"
  },
  {
    riddle: "The Earth is flat.",
    answer: "false"
  },
  {
    riddle: "A square has four equal sides.",
    answer: "true"
  }
];
  
let currentRiddleIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', startPrelude);

  const submitRiddleButton = document.getElementById('submitRiddle');
  submitRiddleButton.addEventListener('click', checkRiddle);

  });


function startPrelude() {
  document.getElementById('greeting').classList.add('hidden-hidden');
  document.getElementById('startButton').classList.add('hidden-hidden');
  document.getElementById('preludeActivity').classList.remove('hidden-hidden');
  displayRiddle();
}

function displayRiddle() {
  const riddleText = document.getElementById('riddleText');
  const riddleMessage = document.getElementById('riddleMessage');
  const trueOption = document.getElementById('trueOption');
  const falseOption = document.getElementById('falseOption');

  riddleText.innerText = riddles[currentRiddleIndex].riddle;
  trueOption.checked = false;
  falseOption.checked = false;
  riddleMessage.innerText = '';
}

function checkRiddle() {
  const riddleMessage = document.getElementById('riddleMessage');
  const selectedOption = document.querySelector('input[name="riddleAnswer"]:checked');

  if (!selectedOption) {
    riddleMessage.innerText = "Please select an answer.";
    riddleMessage.style.color = 'orange';
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === riddles[currentRiddleIndex].answer) {
    riddleMessage.innerText = "Correct! Get ready for the surprise!";
    riddleMessage.style.color = 'green';
    setTimeout(() => {
      document.getElementById('preludeActivity').classList.add('hidden-hidden');
      startCelebration();
    }, 4000);
  } else {
    riddleMessage.innerText = "Incorrect. Try again!";
    riddleMessage.style.color = 'red';
  }
}

function startCelebration() {
  const animatedGreeting = document.getElementById('animatedGreeting');
  const surpriseElement = document.getElementById('surpriseElement');
  const decorations = document.getElementById('decorations');
  const photos = document.getElementById('photos');
  const form = document.getElementById('thankYouForm');
  const bgMusic = document.getElementById('bgMusic');
  const confettiCanvas = document.getElementById('confettiCanvas');
  const balloons = document.querySelectorAll('.balloons');

  // Show animated greeting
  animatedGreeting.classList.remove('hidden-hidden');

  // Start playing background music
  bgMusic.play();

  // Trigger Confetti Animation immediately
  triggerConfetti(confettiCanvas);

  // After a delay, show decorations and photos, and then the surprise
  setTimeout(() => {
    decorations.classList.remove('hidden-hidden');
    photos.classList.remove('hidden-hidden');

    // Show surprise element after another delay
    setTimeout(() => {
      animatedGreeting.classList.add('hidden-hidden'); // Hide animated greeting
      surpriseElement.classList.remove('hidden-hidden');
      triggerSurpriseAnimation(); // Trigger surprise specific animation

      // Remove balloons after 5 seconds from surprise
      setTimeout(() => {
        balloons.forEach(balloonsElement => {
          balloonsElement.classList.add('fadeOut');
          setTimeout(() => {
            balloonsElement.classList.add('hidden-hidden');
          }, 1500);
        });

        // Hide decorations and surprise after 5 seconds and show Thank You Form
        setTimeout(() => {
          decorations.classList.add('fadeOut');
          surpriseElement.classList.add('fadeOut');
          setTimeout(() => {
            decorations.classList.add('hidden-hidden');
            surpriseElement.classList.add('hidden-hidden');
            form.classList.remove('hidden-hidden');
          }, 1500);
        }, 5000);
      }, 5000);
    }, 3000); // Delay before surprise appears
  }, 2000); // Delay before decorations and photos appear
}

function triggerSurpriseAnimation() {
  const surpriseText = document.querySelector('.surprise-text');
  surpriseText.style.animation = 'surprisePop 1s ease-out forwards';
}

function triggerConfetti(canvas) {
  // Ensure the canvas is visible and occupies the entire screen
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';

  // Initialize confetti
  confetti.create(canvas, {
    resize: true,
    useWorker: true
  })({ particleCount: 200, spread: 70, origin: { y: 0.6 } });

  // You can also create a periodic confetti animation here if needed
  setInterval(() => {
    confetti({ particleCount: 100, spread: 50, origin: { y: 0.5 } });
  }, 1000);
}

function showPopup(image) {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  popupImage.src = image.src;
  popup.classList.remove('hidden-hidden');
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden-hidden');
}

function scrollSlider(direction) {
  const gallerySlider = document.getElementById('gallerySlider');
  gallerySlider.scrollLeft += direction * 150;
}

// function submitForm(event) {
//   event.preventDefault();
//   const message = document.getElementById('formMessage');
//   message.innerText = "Thank you for your kind words!";
//   setTimeout(() => {
//     document.getElementById('thankYouForm').reset();
//     message.innerText = '';
//   }, 3000);
// }

// The form reset and message clear logic was commented out in the original file.
// If needed, it can be re-enabled or modified here.
// setTimeout(() => {
// document.getElementById('thankYouForm').reset();
//     message.innerText = '';
//   }, 3000);

