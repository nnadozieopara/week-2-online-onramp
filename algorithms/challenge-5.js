function arraySum(arr1, arr2) {
    let sum = [];
    let firstLength = arr1.length;
    let secondLength = arr2.length;

    for(let i = 0; i<firstLength; i++){
        sum[i] = arr1[i] + arr2[i % secondLength];
    }

    return sum;
}

console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]));
console.log(arraySum([10,20,30,40,50], [20,40,60]));

module.exports = arraySum
