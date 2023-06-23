// Write a program that counts from 1 to 50 in fizzbuzz fashion.

for (let x = 1; x < 51; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('FizzBuzz');
    } else if (x % 3 === 0) {
        console.log('fizz');
    } else if (x % 5 === 0) {
        console.log('buzz');
    } else {console.log(x);
    }
}