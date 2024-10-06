// Declare a variable for your age and display it in the console.
let age = 32;
console.log(age);

// Calculate the sum of two numbers and display the result.
let num1 = 8;
let num2 = 4;
let sum = num1 + num2;
console.log(sum);

// Declare a variable for the temperature in Celsius and convert it to Fahrenheit.
let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(fahrenheitTemperature);

// Assign a string with the value "Hello, " and add your name, then display the result.
let greeting = "Hello, ";
let myName = "John!";
let fullGreeting = greeting + myName;
console.log(fullGreeting);

// Check if a number is even or odd and display the result.
let numberToCheck = 9;
let isEven = numberToCheck % 2 === 0;
console.log("The number is even: ", isEven);

// Declare a boolean variable to check if you are a student or not.
let isStudent = true;
console.log(isStudent);

// Declare two string variables and concatenate them.
let firstName = "John";
let lastName = "Mrn";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Calculate the remainder of the division of two numbers and display the result.
let dividend = 14;
let divisor = 4;
let remainder = dividend % divisor;
console.log(remainder);

// Declare a variable and assign it the value undefined, then display the result.
let undefinedVariable;
console.log(undefinedVariable);

// Calculate the area of a rectangle using the length and width.
let length = 20;
let width = 8;
let area = length * width;
console.log(area);

// Check if two strings are identical and display the result.
let str1 = "Good morning";
let str2 = "Good morning";
console.log("The strings are identical: ", str1 === str2);

// Declare two boolean variables and perform logical operations on them.
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true
console.log(!condition1); // false

// Declare a variable for the birth year and calculate the age.
let birthYear = 1992;
let currentYear = new Date().getFullYear();
let myAge = currentYear - birthYear;
console.log(myAge);

// Concatenate two strings and convert the result to uppercase.
let str3 = "Stay";
let str4 = "Pozitive!";
let concatenatedStr = str3 + " " + str4;
let upperCaseStr = concatenatedStr.toUpperCase();
console.log(upperCaseStr);

// Check if a number is greater than or equal to 100 and display the result.
let numToCheck = 140;
let isGreaterOrEqual = numToCheck >= 100;
console.log("The number is greater than or equal to 100: ", isGreaterOrEqual);

// Declare a variable for the distance in kilometers and convert it to miles.
let distanceInKm = 80;
let distanceInMiles = distanceInKm * 0.621371;
console.log(distanceInMiles);

// Assign a number the value null and check the data type.
let nullNumber = null;
console.log(typeof nullNumber); // object

// Declare two numbers and display if they are equal.
let num5 = 8;
let num6 = 8;
let numbersAreEqual = num5 === num6;
console.log("The numbers are equal: ", numbersAreEqual);

// Declare a variable for the price of a product and apply a discount.
let productPrice = 60;
let discount = 0.1; // 10%
let discountedPrice = productPrice - (productPrice * discount);
console.log(discountedPrice);