import { ACTIONS } from './DigitButton';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="btn light-gray"
      type="button"
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}