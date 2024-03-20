import React, { useState } from 'react';
import "./styles.css";
import myArry from './KeyListData';



function Calculator() {

const myList = myArry.map((item) => 
{
    return <><button className= {item.num !== 'Clear' ? 'num-button': 'clear-button'} onClick={()=>handleClick(item.num)}>{item.num}</button>{(item.num === '+' || item.num === '-' || item.num === '*') && <br/>}</>
}
);

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  function handleClick(val){
    if(val === "="){
        try {
            let res = (eval(input));
          setResult(res);
          setInput(res);
        } catch (error) {
          setResult('Error');
        }
    }
    else if(val === "C"){
        setInput('');
        setResult('');
    }
    else
    setInput(input + val);
  }

  return (
    <div>
      <input type="text" value={input} readOnly />
      <br />
      {myList}
      {/* <button onClick={() => InputValue('1')}>1</button>
      <button onClick={() => InputValue('2')}>2</button>
      <button onClick={() => InputValue('3')}>3</button>
      <button onClick={() => InputValue('+')}>+</button>
      <br />
      <button onClick={() => InputValue('4')}>4</button>
      <button onClick={() => InputValue('5')}>5</button>
      <button onClick={() => InputValue('6')}>6</button>
      <button onClick={() => InputValue('-')}>-</button>
      <br />
      <button onClick={() => InputValue('7')}>7</button>
      <button onClick={() => InputValue('8')}>8</button>
      <button onClick={() => InputValue('9')}>9</button>
      <button onClick={() => InputValue('*')}>*</button>
      <br />
      <button onClick={() => InputValue('0')}>0</button> */}
      {/* <button onClick={() => handleEquals()}>=</button>
      <button onClick={() => handleClear()}>Clear</button> */}
      {/* <button onClick={() => InputValue('/')}>/</button> */}
      <br />
    </div>
  );
}

export default Calculator;
