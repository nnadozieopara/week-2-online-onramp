function increment(arr, value) {
    let length = arr.length;
    for(let i=0; i<length; i++){
        
        arr[i]["val"] += value;
    }
    return arr;
}

console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2));
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5));

module.exports = increment
