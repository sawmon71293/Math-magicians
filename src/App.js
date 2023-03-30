import './App.css';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';

function App() {
  return (
    <div className="container">
      <DisplayQuote />
      <Calculator />
    </div>
  );
}

export default App;
