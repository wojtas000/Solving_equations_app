import { startTraining } from '../functions/utilityFunctions.js';
import { checkAnswer } from '../functions/utilityFunctions.js';

// Start button

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startTraining();
});

// Retry button

const retryButton = document.getElementById('retryButton');
retryButton.style.display = 'none';

retryButton.addEventListener('click', () => {
    retryButton.style.display = 'none';
    startTraining();
});

// Check button
const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', () => {
    checkAnswer();
});

// Enter key

answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkAnswer();
    }
});

