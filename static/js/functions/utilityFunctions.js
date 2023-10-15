import { generateEquation } from './mathFunctions.js';

let currentEquation;
let points = 0; 
const pointsDisplay = document.getElementById('points');
const mathContainer = document.getElementById('math-container');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

// Function to start the training session
export function startTraining() {

    // Hide the start button
    startButton.style.display = 'none';

    // Reset timer, math container, and points
    let seconds = 0;
    points = 0;
    // let currentEquation;
    timerDisplay.textContent = 'Time: 0s';
    mathContainer.textContent = '';

    pointsDisplay.textContent = 'Points: 0';

    // Start the timer
    const timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Time: ${seconds}s`;
    }, 1000);

    currentEquation = generateEquation();
    mathContainer.textContent = `${currentEquation[0]} ${currentEquation[3]} ${currentEquation[1]} =`;
    

    // Show the retry button initially set to display: none
    const retryButton = document.getElementById('retryButton');
    retryButton.style.display = 'none';

    // Stop the training session after a certain duration (e.g., 60 seconds)
    setTimeout(() => {
        clearInterval(timerInterval);
        mathContainer.textContent = 'Training completed! You scored ' + points + ' points.';
        // Show the retry button after training completion
        retryButton.style.display = 'block';
    }, 60000); // Change the duration as needed
}


// Function to check the answer
export function checkAnswer() {
    
    const userAnswer = parseFloat(answerInput.value);
    
    if (!isNaN(userAnswer) && userAnswer === currentEquation[2]) {

        const correctSound = document.getElementById('correctSound');
        correctSound.play();

        // Correct answer, remove the red-input class
        answerInput.classList.remove('red-input');
        answerInput.classList.add('input');
        
        // Add 1 point
        points++;
        pointsDisplay.textContent = `Points: ${points}`;
        currentEquation = generateEquation();
        mathContainer.textContent = `${currentEquation[0]} ${currentEquation[3]} ${currentEquation[1]} =`;
    } 
    
    else {
        // Incorrect answer, add the red-input class
        answerInput.classList.remove('input');
        answerInput.classList.add('red-input');
        const wrongSound = document.getElementById('wrongSound');
        wrongSound.play();
    }
    // Clear the input field
    answerInput.value = '';
}