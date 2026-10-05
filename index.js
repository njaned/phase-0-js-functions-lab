function calculateTax(amount) {
    return amount * 0.1;
}

const convertToUpperCase = (text) => {
    return text.toUpperCase();
}

const findMaximum = (num1, num2) => {
    return Math.max(num1, num2);
}

const isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
}

const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    return originalPrice - (originalPrice * discountPercentage/100);
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };