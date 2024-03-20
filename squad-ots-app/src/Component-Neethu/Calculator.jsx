import React, { useState } from 'react';
//import logo from './logo.svg';
// import './App.css';
import '../styles.css';

const Calculate = () => {
  const [result, setresult] = useState<string>("");


  const buttons = [
    { num: '7' }, { num: '8' }, { num: '9' }, { num: '/' },
    { num: '4' }, { num: '5' }, { num: '6' }, { num: '*' },
    { num: '1' }, { num: '2' }, { num: '3' }, { num: '-' },
    { num: '.' }, { num: '0' }, { num: '=' }, { num: '+' }, { num: 'C' }
  ];
  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        setresult(eval(result));
        break;
      case 'C':
        setresult('');
        break;
      default:
        setresult((result) => result + value);
        break;
    }
  };

  return (
    <div className="container">
      <div className='calc'>
        <div className="input">{result}</div>
        <div className="button-row">
          {buttons.map((values, index) => (
            <div key={index} className='button'>
              <button onClick={() => handleButtonClick(values.num)}>
                {values.num}
              </button>
              {(values.num === '/' || values.num === '*' || values.num === '-') && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculate;