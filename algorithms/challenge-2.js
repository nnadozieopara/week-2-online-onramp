function numSwap(number) {

    function numberOfDigits(number){
        let count = 0;
        while(number > 0) {
            count++;
            r = number % 10;
            number = (number - r)/10;
        }
        return count;
    }


    let digits = numberOfDigits(number);

    if(digits %2 !== 0){
        return "invalid number"
    }else{
        let swappedNumber = 0;
        let updateNumber = 1;
        while(number > 0){
            let firstDigit = number % 10;
            let secondDigit = ( (number - firstDigit) / 10) % 10;
            swappedNumber += updateNumber * (10 * firstDigit + secondDigit);
            let remainder = number % 100;
            number = (number - remainder) / 100;
            updateNumber *= 100;
        }

        return swappedNumber;
    }
}


console.log(numSwap(1234));
console.log(numSwap(432156));
console.log(numSwap(34567));

module.exports = numSwap
