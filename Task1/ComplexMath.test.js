const ComplexNumber = require('./ComplexNumber');
const ComplexMath = require('./ComplexMath');
const CMath = new ComplexMath();

let testComlexNumber1 = new ComplexNumber(-2, 1);
let testComlexNumber2 = new ComplexNumber(1, -1);

describe('Addition of 2 complex numbers', () => {
  test('Should be defined and not null', () => {
    expect(CMath.add).not.toBeNull();
    expect(CMath.add).toBeDefined();
    expect(CMath.add).not.toBeUndefined();
  });

  test('Should add correctly', () => {
    let testResult = {
      realPart: -1,
      imaginaryPart: 0
    }
    expect(CMath.add(testComlexNumber1, testComlexNumber2)).toEqual(testResult);
  });
});

describe('Substraction of 2 complex numbers', () => {
  test('Should be defined and not null', () => {
    expect(CMath.subtract).not.toBeNull();
    expect(CMath.subtract).toBeDefined();
    expect(CMath.subtract).not.toBeUndefined();
  });

  test('Should add correctly', () => {
    let testResult = {
      realPart: -3,
      imaginaryPart: 2
    }
    expect(CMath.subtract(testComlexNumber1, testComlexNumber2)).toEqual(testResult);
  });
});

describe('Division of 2 complex numbers', () => {
  test('Should be defined and not null', () => {
    expect(CMath.divide).not.toBeNull();
    expect(CMath.divide).toBeDefined();
    expect(CMath.divide).not.toBeUndefined();
  });

  test('Should add correctly', () => {
    let testResult = {
      realPart: -1.5,
      imaginaryPart: -0.5
    }
    expect(CMath.divide(testComlexNumber1, testComlexNumber2)).toEqual(testResult);
  });
});

describe('Multiplication of 2 complex numbers', () => {
  test('Should be defined and not null', () => {
    expect(CMath.multiply).not.toBeNull();
    expect(CMath.multiply).toBeDefined();
    expect(CMath.multiply).not.toBeUndefined();
  });

  test('Should add correctly', () => {
    let testResult = {
      realPart: -1,
      imaginaryPart: 3
    }
    expect(CMath.multiply(testComlexNumber1, testComlexNumber2)).toEqual(testResult);
  });
});

describe('Square root of a complex number', () => {
  let testComlexNumber = new ComplexNumber(-4, 0);

  test('Should be defined and not null', () => {
    expect(CMath.sqrt).not.toBeNull();
    expect(CMath.sqrt).toBeDefined();
    expect(CMath.sqrt).not.toBeUndefined();
  });

  test('Should not contain falsy values', () => {
    expect(CMath.sqrt(testComlexNumber)).not.toContain(false);
    expect(CMath.sqrt(testComlexNumber)).not.toContain(0);
    expect(CMath.sqrt(testComlexNumber)).not.toContain('');
    expect(CMath.sqrt(testComlexNumber)).not.toContain(null);
  }); 

  test('Should add correctly', () => {
    let testResult = [
      {
        realPart: 0,
        imaginaryPart: 2
      },
      {
        realPart: 0,
        imaginaryPart: -2
      },
    ]
    expect(CMath.sqrt(testComlexNumber)).toEqual(testResult);
  });
});

describe('Signum function', () => {
  test('Should be defined and not null', () => {
    expect(CMath.sgn).not.toBeNull();
    expect(CMath.sgn).toBeDefined();
    expect(CMath.sgn).not.toBeUndefined();
  });

  test('Should return correct result', () => {
    expect(CMath.sgn(1)).toEqual(1);
    expect(CMath.sgn(-1)).toEqual(-1);
    expect(CMath.sgn(0)).toEqual(1);
    expect(CMath.sgn(5)).toEqual(1);
    expect(CMath.sgn(-5)).toEqual(-1);
  });
});

describe('Find root of quadratic equation function', () => {
  test('Should be defined and not null', () => {
    expect(CMath.findRootOfQuadraticEquation).not.toBeNull();
    expect(CMath.findRootOfQuadraticEquation).toBeDefined();
    expect(CMath.findRootOfQuadraticEquation).not.toBeUndefined();
  });

  test('Should return correct result', () => {
    let a = new ComplexNumber(1, 0);
    let b = new ComplexNumber(-6, 0);
    let c = new ComplexNumber(34, 0);
    let testResult = [
      {
        realPart: 3,
        imaginaryPart: 5
      },
      {
        realPart: 3,
        imaginaryPart: -5
      }
    ]
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[0]);
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[1]);

    a = new ComplexNumber(1,0);
    b = new ComplexNumber(-7,2);
    c = new ComplexNumber(13,-13);
    testResult = [
      {
        realPart: 2,
        imaginaryPart: -3
      },
      {
        realPart: 5,
        imaginaryPart: 1
      }
    ]
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[0]);
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[1]);

    a = new ComplexNumber(1,0);
    b = new ComplexNumber(3,0);
    c = new ComplexNumber(3,0);
    testResult = [
      {
        realPart: -1.5,
        imaginaryPart: Math.sqrt(3)/2
      },
      {
        realPart: -1.5,
        imaginaryPart: -Math.sqrt(3)/2
      }
    ]
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[0]);
    expect(CMath.findRootOfQuadraticEquation(a,b,c)).toContainEqual(testResult[1]);
  });
});


