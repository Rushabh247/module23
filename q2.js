// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display progress indication
function displayProgress(remainingTime) {
    console.log("Generating random number in " + remainingTime + " seconds...");
}

// Function to generate random number after a delay
function generateRandomNumberWithDelay(delay) {
    var remainingTime = delay;
    var interval = setInterval(function() {
        displayProgress(remainingTime);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(interval);
            var randomNumber = generateRandomNumber(1, 100); // Example range: 1 to 100
            console.log("Random number generated:", randomNumber);
        }
    }, 1000); // Update progress indication every second

    setTimeout(function() {
        clearInterval(interval);
    }, delay * 1000); // Stop progress indication after specified delay
}

// Specify delay in seconds
var delayInSeconds = 3;

// Call function to generate random number after delay
generateRandomNumberWithDelay(delayInSeconds);
