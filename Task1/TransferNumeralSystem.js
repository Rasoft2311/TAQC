module.exports = class TransferNumeralSystem {
  constructor(secondSystemBase) {
    this.secondSystemBase = secondSystemBase;
  }

  transferToBaseSystem10(number) {
    number = number.toString().split("").reverse();
    return number.reduce((previousValue, item, index) => {
      return previousValue += parseInt(item)*this.secondSystemBase**index;
    }, 0);
  }

  transferFromBaseSystem10(number) {
    let result = "";
    let lastDivisionResult = number;
    while(number >= this.secondSystemBase) {
      result += number % this.secondSystemBase;
      number = parseInt(number / this.secondSystemBase);
      lastDivisionResult = number;
    }
    result += lastDivisionResult;
    return parseInt(this.reverseString(result));  
  }

  reverseString(str) {
    return str.split("").reverse().join("");
  }
}