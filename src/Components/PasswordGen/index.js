import React from 'react';

export default function PasswordGen() {
  return (
    <main className='PasswordGen'>
      <form className='generatorForm'>
        <h1>I'm gonna generate you a password so hard</h1>
        <div className="inputDiv">
          <label for="length">Length</label>
          <input type="text" id="length" value="16" />
        </div>
        <div className="inputDiv">
          <label for="lowercase">Lowercase</label>
          <input type="checkbox" id="lowercase" checked />
        </div>
        <div className="inputDiv">
          <label for="uppercase">Uppercase</label>
          <input type="checkbox" id="uppercase" checked />
        </div>
        <div className="inputDiv">
          <label for="numbers">Numbers</label>
          <input type="checkbox" id="numbers" checked />
        </div>
        <div className="inputDiv">
          <label for="symbols">Symbols</label>
          <input type="checkbox" id="symbols" checked />
        </div>
        <button>Generate</button>
        <div id="password"></div>
      </form>
    </main>
  )
}