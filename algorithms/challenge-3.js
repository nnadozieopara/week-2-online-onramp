function increment(arr, value) {

    let length = arr.length;

    for(let i=0; i<length; i++){
        
        arr[i]["val"] += value; // {val: 3} {val: 3 + 5} {val: 8} {key: value}
    }
    return arr;
}

console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2));
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5));
console.log(increment([{val: 4},{val: 45}, {val: 67}],100));

module.exports = increment
