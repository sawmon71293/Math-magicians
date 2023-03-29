export default function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (Number.isNaN(prev) || Number.isNaN(current)) return '';
  let computation = '';
  // eslint-disable-next-line default-case
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case 'x':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
  }
  return computation.toString();
}
