function perfectSquare(num) {
    if (num === 0) {return 1}
    else if (num === 1) {return 4}
    else {
        half_num = num//2
        for (i=1;i<=half_num;i++) {
            if (i*i == num) {
                return (i+1)*(i+1)
            }
        }
    }
    return -1
}

console.log(perfectSquare(4)) //9
console.log(perfectSquare(289)) //324
console.log(perfectSquare(3000)) //-1

