function reverseString(text) {
    splitString = text.split("");
    reverse = splitString.reverse();
    reversedString = reverse.join("");
    return reversedString;
}

console.log(reverseString("Modou"))