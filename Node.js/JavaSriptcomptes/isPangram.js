//using Set and Match .

function isPangram(sentence) {
    // Convert the sentence to lowercase
    sentence = sentence.toLowerCase();
    // Create a Set of all the letters in the sentence
    const letters = new Set(sentence.match(/[a-z]/g));
    // Check if the size of the Set is 26
    return letters.size === 26;
  }
  
  // Example usage
  console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
  console.log(isPangram("The quick brown fox jumps over the la")); // Output: false
  

  //assic value 
  function isPangram(sentence) {
    // Convert the sentence to lowercase
    sentence = sentence.toLowerCase();
    // Initialize an array of booleans representing whether each letter has been found
    const found = new Array(26).fill(false);
    // Iterate over each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const c = sentence.charCodeAt(i);
      if (c >= 97 && c <= 122) {
        // If the character is a lowercase letter, mark it as found
        found[c - 97] = true;
      }
    }
    // Check if all letters have been found
    return found.every((value) => value === true);
  }
  
  // Example usage
  console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
  console.log(isPangram("The quick brown fox jumps over the la")); // Output: false

  //using includes
  function isPangram(sentence) {
    // Convert the sentence to lowercase
    sentence = sentence.toLowerCase();
    // Iterate over each letter in the alphabet
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
      // If the sentence does not include the letter, return false
      if (!sentence.includes(letter)) {
        return false;
      }
    }
    // If all letters are found, return true
    return true;
  }
  
  // Example usage
  console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
  console.log(isPangram("The quick brown fox jumps over the la")); // Output: false
  