import { useReducer } from 'react';
import { DigitButton, ACTIONS } from './DigitButton';
import OperationButton from './OperationButton';
import evaluate from './Evaluate';

// eslint-disable-next-line consistent-return
function reducer(state, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand.inclued('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (state.operation == null
          || state.currentOperand == null
          || state.previousOperand == null) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
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
