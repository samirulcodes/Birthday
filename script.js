
function startCelebration() {
  const greeting = document.getElementById('greeting');
  const decorations = document.getElementById('decorations');
  const photos = document.getElementById('photos');
  const form = document.getElementById('thankYouForm');
  const bgMusic = document.getElementById('bgMusic');
  const confettiCanvas = document.getElementById('confettiCanvas');
  const balloons = document.querySelectorAll('.balloons'); // Select balloons

  // Start playing background music
  bgMusic.play();

  // Show decorations and photos
  greeting.innerText = "Happy Birthday!";
  decorations.classList.remove('hidden-hidden');
  photos.classList.remove('hidden-hidden');

  // Trigger Confetti Animation
  triggerConfetti(confettiCanvas);

  // Remove balloons after 5 seconds
  setTimeout(() => {
    balloons.forEach(balloonsElement => {
      balloonsElement.classList.add('fadeOut');
      setTimeout(() => {
        balloonsElement.classList.add('hidden-hidden');
      }, 1500);
    });

    // Hide decorations after 5 seconds and show Thank You Form
    setTimeout(() => {
      decorations.classList.add('fadeOut');
      setTimeout(() => {
        decorations.classList.add('hidden-hidden');
        form.classList.remove('hidden-hidden');
      }, 1500);
    }, 5000);
  }, 5000);
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

function submitForm(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.innerText = "Thank you for your kind words!";
  setTimeout(() => {
    document.getElementById('thankYouForm').reset();
    message.innerText = '';
  }, 3000);
}


