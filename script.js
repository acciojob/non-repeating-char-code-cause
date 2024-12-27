function firstNonRepeatedChar(str) {
 // Write your code here
	 const frequencyMap = new Map();

    // Populate the frequency map
    for (let char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (frequencyMap.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
