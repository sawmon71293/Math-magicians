export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate',
};

export function DigitButton({ dispatch, digit }) {
  const isZero = digit;

  return (
    <button
      className={`${isZero !== '0' ? 'btn light-gray' : 'btn light-gray span-two'}`}
      type="button"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
