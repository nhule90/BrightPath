// Copy from other team
// function printDigits(num) {
//     let remainder = 0
//     while (num > 0) {
//         remainder = num % 10
//         num = Math.floor(num / 10)
//         console.log(remainder)
//     }
// }
// Original
function printDigits(num) {
    while (num > 0) {
        var remainder = num % 10
        num = (num-remainder)/10
        console.log(remainder)
    }
}
printDigits(120)