// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

var input = "Hello World";

// Function to reverse the input string after a delay
function reverseAfterDelay(input) {
    setTimeout(function() {
        var reversed = reverseString(input);
        console.log("Reversed string:", reversed);
    }, 2000); 
}


reverseAfterDelay(input);
