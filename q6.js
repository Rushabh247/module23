// Function to validate LinkedIn profile URL using regular expression
function validateLinkedInURL(url) {
    
    var linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;


    if (linkedinRegex.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is invalid.");
    }
}

validateLinkedInURL("https://www.linkedin.com/in/john-doe");       // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/123_johndoe");   // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/jane_doe_456");  // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/johndoe-"); // Invalid URL (ends with hyphen)
validateLinkedInURL("https://www.linkedin.com/in/"); // Invalid URL (missing profile ID)
validateLinkedInURL("https://www.linkedin.com/johndoe");  // Invalid URL (missing "/in/")
validateLinkedInURL("https://www.linkedin.com/in/johndoe12345678901234567890");  // Invalid URL (profile ID too long)
