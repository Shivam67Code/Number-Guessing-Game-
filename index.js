const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`Please enter a valid number`);
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum}-${maxNum}`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert(`Guess higher`);
        } else if (guess > answer) {
            window.alert(`Guess lower`);
        } else {
            window.alert(`Congratulations! You guessed the correct number ${answer} in ${attempts} attempts`);
            running = false; // Terminate the loop only if the correct number is guessed
        }
    }
}
