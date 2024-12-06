
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7; // Maximum number of attempts
let minRange = 1;
let maxRange = 100;

while (attemptsLeft > 0) {
    
    const userGuess = window.prompt(`Guess the number between ${minRange} and ${maxRange}. Attempts left: ${attemptsLeft}`);
    

    if (userGuess === null || userGuess === "") {
        alert("Please enter a valid number.");
        continue;
    }
    
    const guess = Number(userGuess);
    if (isNaN(guess) || guess < minRange || guess > maxRange) {
        alert("Invalid input! Please enter a number within the range.");
        continue;
    }
    

    attemptsLeft--;
    if (guess === targetNumber) {
        alert("Congratulations! You guessed the correct number!");
        document.getElementById("result").innerHTML = `<img src="correct.jpg" alt="Correct Guess">`;
        break;
    } else if (guess < targetNumber) {
        alert("Too low! Try again.");
        minRange = Math.max(minRange, guess + 1);
    } else {
        alert("Too high! Try again.");
        maxRange = Math.min(maxRange, guess - 1);
    }
}


if (attemptsLeft === 0) {
    alert(`Game over! The correct number was ${targetNumber}.`);
    document.getElementById("result").innerHTML = `<img src="wrong.jpg" alt="Game Over">`;
}
