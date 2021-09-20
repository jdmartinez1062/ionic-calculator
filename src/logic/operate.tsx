import Big from 'big.js';
const operate = (
  numberOne: string | null,
  numberTwo: string | null,
  operation: string | null,
): string => {
  const one = Big(numberOne ? numberOne : '');
  const two = Big(numberTwo ? numberTwo : '');
  let total;
  switch (operation) {
    case '+':
      total = one.plus(two);
      break;
    case '-':
      total = one.minus(two);
      break;
    case 'X':
      total = one.times(two);
      break;
    case '%':
      total = one.div(Big(100.0)).times(two);
      break;
    case '÷':
      if (two !== Big(0.0)) {
        total = one.div(two);
      } else total = 'Error';
      break;
    default:
      total = 0;
  }
  return total.toString();
};

export default operate;
