const TransferNumeralSystem = require('./TransferNumeralSystem');

const transfer = new TransferNumeralSystem(5);

describe('Transfer to Base System 10 from Bast System 5', () => {
  test('Should be defined and not null', () => {
    expect(transfer.transferToBaseSystem10).not.toBeNull();
    expect(transfer.transferToBaseSystem10).toBeDefined();
    expect(transfer.transferToBaseSystem10).not.toBeUndefined();
  });

  test('Should transfer correctly', () => {
    expect(transfer.transferToBaseSystem10(210)).toBe(55);
    expect(transfer.transferToBaseSystem10(10233)).toBe(693);
    expect(transfer.transferToBaseSystem10(0)).toBe(0);
    expect(transfer.transferToBaseSystem10(1)).toBe(1);
    expect(transfer.transferToBaseSystem10(2)).toBe(2);
    expect(transfer.transferToBaseSystem10(3)).toBe(3);
    expect(transfer.transferToBaseSystem10(4)).toBe(4);
    expect(transfer.transferToBaseSystem10(10)).toBe(5);
    expect(transfer.transferToBaseSystem10(11)).toBe(6);
  });
});

describe('Transfer to Base System 5 from Bast System 10', () => {
  test('Should be defined and not null', () => {
    expect(transfer.transferFromBaseSystem10).not.toBeNull();
    expect(transfer.transferFromBaseSystem10).toBeDefined();
    expect(transfer.transferFromBaseSystem10).not.toBeUndefined();
  });

  test('Should transfer correctly', () => {
    expect(transfer.transferFromBaseSystem10(55)).toBe(210);
    expect(transfer.transferFromBaseSystem10(693)).toBe(10233);
    expect(transfer.transferFromBaseSystem10(0)).toBe(0);
    expect(transfer.transferFromBaseSystem10(1)).toBe(1);
    expect(transfer.transferFromBaseSystem10(2)).toBe(2);
    expect(transfer.transferFromBaseSystem10(3)).toBe(3);
    expect(transfer.transferFromBaseSystem10(4)).toBe(4);
    expect(transfer.transferFromBaseSystem10(5)).toBe(10);
    expect(transfer.transferFromBaseSystem10(6)).toBe(11);
  });
});


