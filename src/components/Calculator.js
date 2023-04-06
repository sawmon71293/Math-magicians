import { useState } from 'react';
import calculate from '../logic/Calculate';
import BUTTONS from './Buttons';

export default function Calculator() {
  const [data, setData] = useState({ total: null, next: null, operator: null });
  const handleClick = (buttonName) => {
    const newData = calculate(data, buttonName);
    setData(newData);
  };

  const renderButtons = (button) => (
    <button
      key={button.name}
      className={`btn ${button.type}`}
      type="button"
      onClick={() => { handleClick(button.name); }}
    >
      {button.name}
    </button>
  );

  return (
    <section className="container calculator">
      <div>
        <h3>Let&apos;s do some Math</h3>
      </div>
      <div className="wrapper">
        <div className="screen">
          <div>
            {data.next || data.total || '0'}
            {data.operator && ` ${data.operator}`}
          </div>
        </div>
        {BUTTONS.map(renderButtons)}
      </div>
    </section>
  );
}
