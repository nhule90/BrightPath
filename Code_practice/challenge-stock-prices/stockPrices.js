//This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

//The best function will be given an array of stock prices in the order they happened throughout the day.

//It should return the maximum possible profit on the stock for that day.

//For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. 
//So the profit would be $12:

function best(arr){
    let bag = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(bag < arr[j] - arr[i]){
                bag = arr[j] - arr[i];
            }
        }
    }
    return bag;
}

console.log(best([1, 2, 3, 4, 5]))
// console.log('ABV')
console.log(best([7, 9, 5, 6, 3, 2]))
