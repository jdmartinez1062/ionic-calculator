import operate from './operate';

type Operations = string | null;

const calculate = (
  dataObject: { total: Operations; next: Operations; operation: Operations },
  buttonName: Operations,
): Operations[] => {
  const buttons = ['+', '-', 'X', '%', '÷'];
  const buttonsOperations = [...buttons, '+/-', 'AC'];
  let { total, next, operation } = dataObject;
  if (buttonName === '=') {
    next = next || '0';
    if (buttons.some((value) => operation === value)) {
      total = operate(total, next, operation);
    } else if (operation === '+/-') {
      total = operate(total, '-1', 'X');
    } else if (operation === '%' && total && next) {
      const sorted: Operations[] = [total, next].sort((a, b) => parseFloat(operate(b!, a!, '-')));
      total = operate(sorted[0], sorted[1], '÷');
      total = operate(total, '100', 'X');
    } else {
      total = next;
    }

    next = '';
    operation = '';
  } else if (buttonsOperations.some((value) => buttonName === value)) {
    total = total || next;
    next = '';
    operation = buttonName;
  } else if (buttonName === null) {
    return [total, next, operation];
  } else {
    next = next = next ? next.toString() + buttonName : buttonName;
  }
  if (operation === 'AC') {
    total = '';
    next = '';
    operation = '';
  }

  return [total, next, operation];
};

export default calculate;
