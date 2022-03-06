function arraySum(arr1, arr2) {
    //arr1 and arr2 are the input array
    //sum is the output
    let sum = [];

    let firstLength = arr1.length;
    let secondLength = arr2.length;

    for(let i = 0; i<firstLength; i++){
        
        sum[i] = arr1[i] + arr2[i % secondLength];
    }

    return sum;
}

console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]));


module.exports = arraySum
