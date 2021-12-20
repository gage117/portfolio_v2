import React, { useState } from 'react';

export default function PasswordGen() {
  const [password, setPassword] = useState('');
  const [formObj, setFormObj] = useState({
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });

  function handleInputChange(event) {
    if (event.target.id === "length") {
      setFormObj({
        ...formObj,
        length: event.target.value,
      });
    } else {
      setFormObj({
        ...formObj,
        [event.target.id]: event.target.checked,
      });
    }
  }

  return (
    <main className='PasswordGen'>
      <form className='generatorForm'>
        <h1>Generate yoself one mighty fine password</h1>
        <h2>Courtesy of the <a href="https://bost.ocks.org/mike/shuffle/">Fisher-Yates Shuffle</a></h2>
        <div className="inputDiv">
          <label htmlFor="length">Length</label>
          <input type="text" id="length" value={formObj.length} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label htmlFor="lowercase">Lowercase</label>
          <input type="checkbox" id="lowercase" checked={formObj.lowercase} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label htmlFor="uppercase">Uppercase</label>
          <input type="checkbox" id="uppercase" checked={formObj.uppercase} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" id="numbers" checked={formObj.numbers} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label htmlFor="symbols">Symbols</label>
          <input type="checkbox" id="symbols" checked={formObj.symbols} onChange={(e) => handleInputChange(e)} />
        </div>
        <button>Generate</button>
        <div id="password"></div>
      </form>
    </main>
  )
}