import {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,encode, palindrome,pigLatin} from './messageMixer.js';

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("deneme"));
  console.log(pigLatin("Deneme yapiyorum deneme ","ay"));
}

displayMessage();



