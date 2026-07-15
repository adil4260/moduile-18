//5
//arry has some duplicate element
// const number = [1, 2, 4, 1, 6, , 2]
const biriyanikhor = ['abul', 'babul', 'cabul', 'cabul', 'abul']

function noDuplicate(array) {
    // console.log(array)
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyanikhor)
console.log(uniqueArray)