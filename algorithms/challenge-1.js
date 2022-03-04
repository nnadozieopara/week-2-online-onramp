function missingNumber(numArr) {
    let initial = [0,0,0,0,0,0,0,0,0];
    let result =[];
    let length = numArr.length;
    for(let i=0; i<length; i++){
        initial[numArr[i] -1] = numArr[i]
    }

    for(let i=0; i<9; i++){
        if(initial[i] === 0){
            result.push(i+1);
        }
    }
    
    if(result.length === 0){
        return false;
    }else if(result.length === 1){
        return result[0];
    }else{
        return result;
    }
}

console.log(missingNumber([1,2,3,4,6,7,8,9]));
console.log(missingNumber([1,2,3,4,5,6,8]));
console.log(missingNumber([1,2,3,4,5,6,7,8,9]));

module.exports = missingNumber
