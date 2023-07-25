//Write a function called hasMoreVowels that takes in one argument, word. 
//When the function is called, return true if that word contains more vowels than non-vowels; 
//otherwise, return false. The word will always be a single word, without any punctuation or spaces. 
//It will contain only uppercase and/or lowercase letters.

function hasMoreVowels(word) {
    let sumvowels = 0
    const vowels = ['a','e','o','i','u','A','E','O','I','U']
    for (i=0;i<word.length;i++){
        if (vowels.includes(word[i])){
            sumvowels +=1
        }}
    if (sumvowels > (word.length/2)) {
        return true
    } else {return false}
    
}
console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('Aal'))