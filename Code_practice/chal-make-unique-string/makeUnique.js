// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

// Write your solution below:

// Trial 1

function makeUnique(str){
    var uniqueStr = str[0]
    
    for (i = 1; i < str.length; i++) {
        if (!uniqueStr.includes(str[i])){
            uniqueStr+=str[i]
        }
    }
    return uniqueStr
}
console.log(makeUnique('iwanttoclimbamountain'))
console.log(makeUnique('helloworld'))