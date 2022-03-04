function withdraw(amount) {
    let amountLess100 = amount % 100;
    let hundred = (amount - amountLess100)/100;
    let amountLess50 = amountLess100 % 50;
    let fifty = (amountLess100 - amountLess50)/50;
    let twenty = amountLess50/20;

    return [hundred, fifty, twenty];
}

console.log(withdraw(250));
console.log(withdraw(370));

module.exports = withdraw