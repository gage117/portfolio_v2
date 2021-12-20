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
        <h1>I'm gonna generate you a password so hard</h1>
        <div className="inputDiv">
          <label for="length">Length</label>
          <input type="text" id="length" value={formObj.length} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label for="lowercase">Lowercase</label>
          <input type="checkbox" id="lowercase" checked={formObj.lowercase} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label for="uppercase">Uppercase</label>
          <input type="checkbox" id="uppercase" checked={formObj.uppercase} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label for="numbers">Numbers</label>
          <input type="checkbox" id="numbers" checked={formObj.numbers} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="inputDiv">
          <label for="symbols">Symbols</label>
          <input type="checkbox" id="symbols" checked={formObj.symbols} onChange={(e) => handleInputChange(e)} />
        </div>
        <button>Generate</button>
        <div id="password"></div>
      </form>
    </main>
  )
}