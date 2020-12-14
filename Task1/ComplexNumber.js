module.exports = class ComplexNumber {
  constructor(realPart = 0, imaginaryPart = 0) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }

  toString() {
    return this.imaginaryPart >= 0 ? (this.imaginaryPart === 0 ? `${this.realPart}` : `${this.realPart} + ${this.imaginaryPart}i`) : `${this.realPart} - ${-this.imaginaryPart}i`;
  }
}