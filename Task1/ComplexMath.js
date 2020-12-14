const ComplexNumber = require('./ComplexNumber');
module.exports = class ComplexMath{
  add(ComplexNumber1, ComplexNumber2) {
    let newRealPart = ComplexNumber1.realPart + ComplexNumber2.realPart;
    let newImaginaryPart = ComplexNumber1.imaginaryPart + ComplexNumber2.imaginaryPart;
    if(newRealPart === 0) newRealPart = 0;
    if(newImaginaryPart === 0) newImaginaryPart = 0;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  subtract(ComplexNumber1, ComplexNumber2) {
    let newRealPart = ComplexNumber1.realPart - ComplexNumber2.realPart;
    let newImaginaryPart = ComplexNumber1.imaginaryPart - ComplexNumber2.imaginaryPart;
    if(newRealPart === 0) newRealPart = 0;
    if(newImaginaryPart === 0) newImaginaryPart = 0;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  divide(ComplexNumber1, ComplexNumber2) {
    let newRealPart = (ComplexNumber1.realPart*ComplexNumber2.realPart + ComplexNumber1.imaginaryPart*ComplexNumber2.imaginaryPart)/(ComplexNumber2.realPart**2 + ComplexNumber2.imaginaryPart**2 );
    let newImaginaryPart = (ComplexNumber1.imaginaryPart*ComplexNumber2.realPart - ComplexNumber1.realPart*ComplexNumber2.imaginaryPart)/(ComplexNumber2.realPart**2 + ComplexNumber2.imaginaryPart**2 );
    if(newRealPart === 0) newRealPart = 0;
    if(newImaginaryPart === 0) newImaginaryPart = 0;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  multiply(ComplexNumber1, ComplexNumber2) {
    let newRealPart = ComplexNumber1.realPart*ComplexNumber2.realPart - ComplexNumber1.imaginaryPart*ComplexNumber2.imaginaryPart;
    let newImaginaryPart = ComplexNumber1.realPart*ComplexNumber2.imaginaryPart + ComplexNumber1.imaginaryPart*ComplexNumber2.realPart;
    if(newRealPart === 0) newRealPart = 0;
    if(newImaginaryPart === 0) newImaginaryPart = 0;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  findRootOfQuadraticEquation(a, b, c) {
    let part1 = this.multiply(b,b); //b^2
    let part2 =  this.multiply(this.multiply(a,c),new ComplexNumber(4,0)); // 4ac
    let part3 =  this.multiply(new ComplexNumber(-1,0),b); // -b
    let part4 =  this.multiply(new ComplexNumber(2,0),a); // 2a
    let root = this.sqrt(this.subtract(part1, part2));
    let result = [];
    root.forEach((root) => {
      result.push(this.divide(this.add(part3, root), part4))
    }); 
    return result;
  }

  sqrt(complexNumber) {
    let a = complexNumber.realPart;
    let b = complexNumber.imaginaryPart;
    let realPart = Math.sqrt((a +  Math.sqrt(a**2 + b**2))/2);
    let imaginaryPart = this.sgn(b)*Math.sqrt((-a + Math.sqrt(a**2 + b**2))/2);
    return (realPart === 0 && imaginaryPart ===0) ?  [new ComplexNumber(realPart, imaginaryPart)] : [new ComplexNumber(realPart, imaginaryPart), new ComplexNumber(realPart === 0 ? 0 : -realPart, imaginaryPart === 0 ? 0 : -imaginaryPart)];
  }

  sgn(x) {
    if(x >= 0) return 1;
    if(x < 0) return -1;
  }
}