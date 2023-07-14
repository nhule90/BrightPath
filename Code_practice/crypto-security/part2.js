/* Part 2 - Ciphers
Open up a text editor and create your very own cipher. State all the logic behind your cipher. Then, using your cipher, encipher the phrase “I love cryptography!” Display the result. Using your cipher again, decipher the ciphered phrase. Do you get “I love cryptography!”?

Take this one step further and create your cipher in code 
*/

/*
Reverse method
Meet me outside  - teeM em edistuo
*/

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('asdf')) // fdsa

function reverseCipher(str){
    var words = str.split(' ')
    var encodedStr = []
    for (let i = 0; i<words.length;i++){
        encodedStr.push(reverseString(words[i]))
    }
    return encodedStr.join(' ')
}
enciphedText = reverseCipher('I love cryptography!')
console.log(enciphedText) // I evol !yhpargotpyrc

// Decipher
deciphedText = reverseCipher(enciphedText)
console.log(deciphedText) // I love cryptography!