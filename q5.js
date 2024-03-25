// Function to validate URL using regular expression
function validateURL(url) {
    // Regular expression to match valid URLs
    var urlRegex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+/;

    // Test if the URL matches the regex
    if (urlRegex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is invalid.");
    }
}

// Test cases
validateURL("http://www.example.com"); // Valid URL
validateURL("https://example.org");    // Valid URL
validateURL("ftp://invalid.com");      // Invalid URL
