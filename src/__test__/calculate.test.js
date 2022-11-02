import calculate from "../logic/calculate";

describe('Test calculate component', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Return an empty string if "AC" is clicked', () => {
    expect(calculate(obj, 'AC')).toEqual({
        total: null,
        next: null,
        operation: null,
      })
  })

  test('Add number first number', () => {
    expect(calculate(obj, '10').next).toEqual('10')
  })

  test('Add second number', () => {
    expect(calculate(calculate(obj, '9'), '10').next).toBe('910')
  })

  test('Check "+"  operation', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  })
  test('Check "-"  operation', () => {
    expect(calculate(obj, '-').operation).toBe('-');
  })
  test('Check "÷"  operation', () => {
    expect(calculate(obj, '÷').operation).toBe('÷');
  })
  test('Check "x"  operation', () => {
    expect(calculate(obj, 'x').operation).toBe('x');
  })

  // complete calculation
  test('complete calculation', () => {
    obj.next = 27;
    expect(calculate(calculate(calculate(calculate(obj, 'null'), '+'), '13'), '=').total).toBe('40');
  })
})