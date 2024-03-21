import './App.css';
import Calculator from './calculator_Akash';
import MainCal from './component-cal';
import './component-cal/Cal.css';
import Calculate from './Component-Neethu/Calculator';

function App() {
  return (
    <div className="App">
      <h5>First Basic Calculator</h5>
      <Calculator />
      <h5>Changes from Git</h5>
      <MainCal />
      <Calculate />
    </div>
  );
}

export default App;
