// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

// Write your code below this line

// Trial 1

// function decodeString(str){
//     shiftNumber = parseInt(str[0])

//     var result = '';
//     var charcode = 0;

//     for (var i = 1; i < str.length; i++) {
//         charcode = (str[i].charCodeAt()) + shiftNumber;
//         result += String.fromCharCode(charcode);
//     }
//     return result
// }

// console.log(decodeString("2fcjjm"))

// Trial 2
// function shiftCharacter(char,num){
//     charcode = (char.charCodeAt()) + num
//     return String.fromCharCode(charcode)
// }

// function decodeString(str){
//     shiftNumber = parseInt(str[0])
//     var result = ''
//     for (var i = 1; i < str.length; i++) {
//         result += shiftCharacter(str[i],shiftNumber);
//     }
//     return result
// }

// console.log(decodeString("2fcjjm"))
//Nhu solution:
function decodestring2(string) {
    let shiftnum = parseInt(string[0])
    var result = ''
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','t','u','v','w','x','y','z']
    for (i=1; i<string.length; i++){
        charindex = alphabet.indexOf(string[i])
        result += alphabet[charindex+shiftnum]
    }
    return result
}
console.log(decodestring2('2fcjjm'))