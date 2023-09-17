var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Get elements
const progressBar = document.querySelector('.progress-bar');
const percentageText = document.querySelector('.percentage');
const percentageInput = document.getElementById('percentageInput');

// Update progress bar and text based on input value
percentageInput.addEventListener('input', () => {
  const percentage = percentageInput.value;
  progressBar.style.clip = `rect(0px, ${percentage}px, 150px, 0px)`;
  percentageText.textContent = `${percentage}%`;
});
