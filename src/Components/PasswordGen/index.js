import React, { useState } from 'react';

function handleInputChange(input, event) {
  console.log( event.target );
}

export default function PasswordGen() {
  const [password, setPassword] = useState('');
  const [formObj, setFormObj] = useState({
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });

  return (
    <main className='PasswordGen'>
      <form className='generatorForm'>
        <h1>I'm gonna generate you a password so hard</h1>
        <div className="inputDiv">
          <label for="length">Length</label>
          <input type="text" id="length" value={formObj.length} onClick={(e) => handleInputChange("length", e)} />
        </div>
        <div className="inputDiv">
          <label for="lowercase">Lowercase</label>
          <input type="checkbox" id="lowercase" checked={formObj.lowercase} onClick={(e) => handleInputChange("lowercase", e)} />
        </div>
        <div className="inputDiv">
          <label for="uppercase">Uppercase</label>
          <input type="checkbox" id="uppercase" checked={formObj.uppercase} onClick={(e) => handleInputChange("uppercase", e)} />
        </div>
        <div className="inputDiv">
          <label for="numbers">Numbers</label>
          <input type="checkbox" id="numbers" checked={formObj.numbers} onClick={(e) => handleInputChange("numbers", e)} />
        </div>
        <div className="inputDiv">
          <label for="symbols">Symbols</label>
          <input type="checkbox" id="symbols" checked={formObj.symbols} onClick={(e) => handleInputChange("symbols", e)} />
        </div>
        <button>Generate</button>
        <div id="password"></div>
      </form>
    </main>
  )
}