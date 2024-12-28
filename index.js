// Game setup
const min = 50;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - min + 1)) + min; // Random number between min and max

let attempts = 0;

// Function to handle the guess submission
function submitGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = Number(guessInput.value); // Get the user's input and convert it to a number
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    // Input validation
    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number!";
    } else if (guess < min || guess > maximum) {
        message.textContent = `Please enter a number between ${min} and ${maximum}`;
    } else {
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;

        if (guess < answer) {
            message.textContent = "Guess a bit higher!";
        } else if (guess > answer) {
            message.textContent = "Guess a bit lower!";
        } else {
            message.textContent = `Congratulations 🤩🎉 You have guessed the correct answer ${answer} in ${attempts} attempts!`;
            // Disable the input and button after the game is over
            guessInput.disabled = true;
            document.querySelector("button").disabled = true;
        }
    }

    // Clear input field after each guess
    guessInput.value = "";
}
