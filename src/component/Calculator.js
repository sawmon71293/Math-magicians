import { useReducer } from 'react';
import { DigitButton, ACTIONS } from './DigitButton';
import OperationButton from './OperationButton';
import reducer from '../Reducer/Reducer';

export default function Calculator() {
  const [{ currentOperand = 0, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {},
  );
  return (
    <div className="wrapper">
      <div className="screen">
        <div>
          {previousOperand}
          {' '}
          {operation}
          {' '}
          {currentOperand}
        </div>

      </div>
      <button
        type="button"
        className="btn light-gray"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button
        className="btn light-gray"
        type="button"
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION })}
      >
        +/-
      </button>
      <button
        className="btn light-gray"
        type="button"
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION })}
      >
        %
      </button>
      <OperationButton
        operation="÷"
        dispatch={dispatch}
      />
      <DigitButton
        digit="7"
        dispatch={dispatch}
      />
      <DigitButton
        digit="8"
        dispatch={dispatch}
      />
      <DigitButton
        digit="9"
        dispatch={dispatch}
      />
      <OperationButton
        operation="x"
        dispatch={dispatch}
      />
      <DigitButton
        digit="4"
        dispatch={dispatch}
      />
      <DigitButton
        digit="5"
        dispatch={dispatch}
      />
      <DigitButton
        digit="6"
        dispatch={dispatch}
      />
      <OperationButton
        operation="-"
        dispatch={dispatch}
      />
      <DigitButton
        digit="1"
        dispatch={dispatch}
      />
      <DigitButton
        digit="2"
        dispatch={dispatch}
      />
      <DigitButton
        digit="3"
        dispatch={dispatch}
      />
      <OperationButton
        operation="+"
        dispatch={dispatch}
      />
      <DigitButton
        digit="0"
        dispatch={dispatch}
      />
      <DigitButton
        digit="."
        className="span-two"
        dispatch={dispatch}
      />
      <button
        className="btn orange"
        type="button"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
}
