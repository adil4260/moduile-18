//2
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 2;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. '
    return result;
}
const adilHight = inchToFeet2(75);
console.log(adilHight)  