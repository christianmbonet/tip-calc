const readlineSync = require("readline-sync");

// Get the total amount of the bill. Wait for user response.
const totalAmount = readlineSync.questionFloat("What's the total amount of the bill: $");

// Get the party size from the user.
const partySize = readlineSync.questionInt("How many people are in your party? ");

// Get % tip from the user.
const tipPercentage = readlineSync.questionFloat("What % would you like to tip? ")

// Repeat all those things back to the user.
console.log(`The total amount of your bill is $${total.Amount.toFixed(2)}.`);
console.log(`The total part size is ${partySize}.`);
console.log(`With a tip of ${tipPercentage}%.`);

// The bill tip is the the tip percentage divided by 100.
let percentage = tipPercentage / 100;
let totalAmountToTip = totalAmount * percentage;

// Total bill = total + tip
let billWithTip = totalAmount + totalAmountToTip;

// Get the total amount of the bill divided by number of people.
let TotalPerPerson = billWithTip / partySize;

// Calculate how much everyone is paying
console.log(totalAmountToTip);
console.log(billWithTip);
console.log(TotalPerPerson);

