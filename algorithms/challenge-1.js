function missingNumber(numArr) {

    let initial = [0,0,0,0,0,0,0,0,0];
    let result =[];
    let length = numArr.length;

    for(let i=0; i<length; i++){                    //initial = [0,2,3,4,5,0,0,0,0]
        initial[numArr[i] -1] = numArr[i]  //numArr= [2,3,4,5] i=0, numArr[0] = 2; numArr[1]=3, numArr[2]= 4, numArr[3]=5
                                        // initial[2 -1] = iniatial[1]=2
                                        //initial[3-1]=initial[2]=3
                                        //initial[4-1]=initial[3]=4
                                        //initial[5-1]=initial[4]=5
    }
                                        //result =[1,6,7,8,9]
    for(let i=0; i<9; i++){             //(0+1)=1
                                        //(5+1)=6
                                        //(6+1)=7
                                        //(7+1)=8
                                        //(8+1)=9
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
