function hasBalancedParens(message) {
    let parensCount = 0;

    for (let character of message) {
        if (character === '(') {
            parensCount++;
        } else if (character === ')') {
            parensCount--;
        }

        if (parensCount < 0) {
            return false;
        }
    }

    return !parensCount;
}
console.log(hasBalancedParens('()')); 
console.log(hasBalancedParens('(Oh Noes!)(')); 
console.log(hasBalancedParens("((There's a bonus parenthesis here.)"));
console.log(hasBalancedParens('(')); 
console.log(hasBalancedParens(')')); 
console.log(hasBalancedParens('"(This has (too many closes.) ) )"')); 
console.log(hasBalancedParens("Hey...there are no parens here!")); 
console.log(hasBalancedParens(')('));