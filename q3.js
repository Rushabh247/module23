// Function to convert USD prices to INR
function convertToINR(priceUSD) {
    const exchangeRate = 80; // 1 USD = 80 INR
    return priceUSD * exchangeRate;
}

// Function to convert prices in the inventory object to INR
function convertPricesToINR(inventory) {
    // Using Object.entries() to iterate over key-value pairs of the inventory object
    return Object.fromEntries(
        Object.entries(inventory).map(([item, priceUSD]) => {
            return [item, convertToINR(priceUSD)];
        })
    );
}

// Sample inventory object with item names as keys and prices in USD as values
var inventory = {
    "item1": 10, // $10
    "item2": 20, // $20
    "item3": 30, // $30
};

// Convert prices to INR
var inventoryINR = convertPricesToINR(inventory);

// Display converted prices
console.log("Inventory (Prices in INR):", inventoryINR);
