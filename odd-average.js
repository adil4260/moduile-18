//4
//function take an array as perameter
//give me the average of the odd number in the array


function oddAverage(numbers) {

    const odds = [];

    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number)
        }
    }
    console.log(odds)


    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;

}
const numbers = [42, 58, 13, 65, 81, 55];
const avg = oddAverage(numbers)
console.log('average of the odd number is :', avg);