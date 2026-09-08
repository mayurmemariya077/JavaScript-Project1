


// Prime Number Checker


function checkPrime() {

    let number = Number(document.getElementById("primeNumber").value);
    let result = document.getElementById("primeResult");

    if (number <= 1) {
        result.innerHTML = "Not a Prime Number";
        return;
    }

    let isPrime = true;

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerHTML = number + " is a Prime Number";
    } else {
        result.innerHTML = number + " is Not a Prime Number";
    }
}



// Age Eligibility Checker


function checkAge() {

    let age = Number(document.getElementById("eligibilityAge").value);
    let result = document.getElementById("ageResult");

    if (age >= 18) {
        result.innerHTML = "You are Eligible";
    } else {
        result.innerHTML = "You are Not Eligible";
    }
}



// Shopping Discount Calculator


function calculateDiscount() {

    let amount = Number(document.getElementById("amount").value);
    let result = document.getElementById("discountResult");

    let discount = 0;

    if (amount >= 5000) {
        discount = 20;
    } else if (amount >= 3000) {
        discount = 15;
    } else if (amount >= 1000) {
        discount = 10;
    }

    let discountAmount = amount * discount / 100;
    let finalAmount = amount - discountAmount;

    result.innerHTML =
        "Discount: " + discount + "%<br>" +
        "Discount Amount: ₹" + discountAmount + "<br>" +
        "Final Amount: ₹" + finalAmount;
}



// Reverse Number


function reverseNumber() {

    let number = Number(document.getElementById("reverseInput").value);
    let result = document.getElementById("reverseResult");

    let reverse = 0;
    let temp = Math.abs(number);

    while (temp > 0) {

        let digit = temp % 10;

        reverse = reverse * 10 + digit;

        temp = Math.floor(temp / 10);
    }

    if (number < 0) {
        reverse = -reverse;
    }

    result.innerHTML = "Reverse Number: " + reverse;
}



// Traffic Signal Simulator


function trafficSignal(signal) {

    let result = document.getElementById("trafficResult");

    if (signal === "red") {
        result.innerHTML = "STOP";
    }
    else if (signal === "yellow") {
        result.innerHTML = "READY";
    }
    else if (signal === "green") {
        result.innerHTML = "GO";
    }
}



// Even Or Odd Checker


function checkEvenOdd() {

    let number = Number(document.getElementById("evenOddInput").value);
    let result = document.getElementById("evenOddResult");

    if (number % 2 === 0) {
        result.innerHTML = number + " is Even";
    } else {
        result.innerHTML = number + " is Odd";
    }
}



// BMI Calculator


function calculateBMI() {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let result = document.getElementById("bmiResult");

    let bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal Weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    result.innerHTML =
        "BMI: " + bmi.toFixed(2) +
        "<br>Category: " + category;
}



// Age Calculator


function calculateAge() {

    let age = Number(document.getElementById("ageInput").value);
    let result = document.getElementById("ageCalculatorResult");

    if (age < 0) {
        result.innerHTML = "Please enter a valid age";
    }
    else {
        result.innerHTML = "Your Age is: " + age + " years";
    }
}



// Factorial


function findFactorial() {

    let number = Number(document.getElementById("factorialInput").value);
    let result = document.getElementById("factorialResult");

    if (number < 0) {
        result.innerHTML = "Factorial is not possible for negative numbers";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    result.innerHTML =
        "Factorial of " + number + " = " + factorial;
}



// Currency Converter


function convertCurrency() {

    let usd = Number(document.getElementById("usd").value);
    let result = document.getElementById("currencyResult");

    // Example fixed conversion rate
    let rate = 83;

    let inr = usd * rate;

    result.innerHTML =
        "$" + usd + " = ₹" + inr;
}



// Vowel Or Consonant


function checkCharacter() {

    let character = document.getElementById("character").value;
    let result = document.getElementById("vowelResult");

    character = character.toLowerCase();

    if (character.length !== 1) {
        result.innerHTML = "Please enter only one character";
        return;
    }

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        result.innerHTML = character + " is a Vowel";
    }
    else {
        result.innerHTML = character + " is a Consonant";
    }
}



// Helper Function For Arrays


function getArray(id) {

    let value = document.getElementById(id).value;

    let array = value
        .split(",")
        .map(Number)
        .filter(number => !isNaN(number));

    return array;
}



// Array Sum


function calculateSum() {

    let numbers = getArray("sumNumbers");
    let result = document.getElementById("sumResult");

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    result.innerHTML = "Array Sum: " + sum;
}



// Largest Number


function findLargest() {

    let numbers = getArray("largestNumbers");
    let result = document.getElementById("largestResult");

    if (numbers.length === 0) {
        result.innerHTML = "Please enter numbers";
        return;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    result.innerHTML = "Largest Number: " + largest;
}



// Reverse Array


function reverseArray() {

    let numbers = getArray("reverseArrayNumbers");
    let result = document.getElementById("reverseArrayResult");

    let reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }

    result.innerHTML =
        "Reversed Array: " + reversed.join(", ");
}



// Count Even And Odd


function countEvenOdd() {

    let numbers = getArray("evenOddNumbers");
    let result = document.getElementById("evenOddArrayResult");

    let even = 0;
    let odd = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }

    result.innerHTML =
        "Even Numbers: " + even +
        "<br>Odd Numbers: " + odd;
}



// Smallest Number


function findSmallest() {

    let numbers = getArray("smallestNumbers");
    let result = document.getElementById("smallestResult");

    if (numbers.length === 0) {
        result.innerHTML = "Please enter numbers";
        return;
    }

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    result.innerHTML = "Smallest Number: " + smallest;
}



// Search Element In Array


function searchElementInArray() {

    let numbers = getArray("searchNumbers");

    let searchValue =
        Number(document.getElementById("searchElement").value);

    let result = document.getElementById("searchResult");

    let found = false;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === searchValue) {
            found = true;
            break;
        }
    }

    if (found) {
        result.innerHTML =
            searchValue + " is Found in Array";
    }
    else {
        result.innerHTML =
            searchValue + " is Not Found in Array";
    }
}



// Second Largest


function findSecondLargest() {

    let numbers = getArray("secondLargestNumbers");
    let result = document.getElementById("secondLargestResult");

    if (numbers.length < 2) {
        result.innerHTML = "Please enter at least two numbers";
        return;
    }

    let uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        result.innerHTML =
            "Second largest number does not exist";
        return;
    }

    uniqueNumbers.sort((a, b) => b - a);

    result.innerHTML =
        "Second Largest Number: " + uniqueNumbers[1];
}



// Remove Duplicate


function removeDuplicate() {

    let numbers = getArray("duplicateNumbers");
    let result = document.getElementById("duplicateResult");

    let uniqueNumbers = [...new Set(numbers)];

    result.innerHTML =
        "After Removing Duplicates: " +
        uniqueNumbers.join(", ");
}



// Array Average


function findAverage() {

    let numbers = getArray("averageNumbers");
    let result = document.getElementById("averageResult");

    if (numbers.length === 0) {
        result.innerHTML = "Please enter numbers";
        return;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    let average = sum / numbers.length;

    result.innerHTML =
        "Array Average: " + average.toFixed(2);
}