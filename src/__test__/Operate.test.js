import Operate from '../logic/operate';

describe('Testing Operating logic', () => {
  // Addition
  test('Take 1 + 5 and return 6', () => {
    expect(Operate(1, 5, '+')).toEqual('6')
  });
  // subtraction
  test('Take 15 - 10 and return 5', () => {
    expect(Operate(15, 10, '-')).toEqual('5')
  })
  // Multiplication
  test('Take 18 x 7 and return 126', () => {
    expect(Operate(18, 7, 'x')).toEqual('126')
  })
  // Division
  test('Take 30 ÷ 7 and return 4.28571428571428571429', () => {
    expect(Operate(30, 7, '÷')).toEqual('4.28571428571428571429')
  })
  // Division by 0
  test('Take 30 ÷ 0 and return Can\'t divide by 0.', () => {
    expect(Operate(30, 0, '÷')).toEqual('Can\'t divide by 0.')
  })
  // Modulo
  test('Take 100 % 60 and return 40', () => {
    expect(Operate(100, 60, '%')).toEqual('40')
  })
  // Modulo by 0
  test('Take 100 % 0 and return Can\'t find modulo as can\'t divide by 0.', () => {
    expect(Operate(100, 0, '%')).toEqual('Can\'t find modulo as can\'t divide by 0.')
  })
  // Throw Error
  test('Throw Error if the operator is no defined or valid', () => {
    expect(() => (Operate(100, 0, ';')).toThrow(Error))
  })
})