import React, { useState } from 'react';

const defaultPreferences = {
  length: 16,
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
};

function shuffleArray(arr) { // Fisher-Yates shuffle
  let n = arr.length, temp, i;
  
  while (n) { // While there are elements to shuffle
    i = Math.floor(Math.random() * n--); // Pick a random element
    temp = arr[n]; // Do the ol' swaperoo
    arr[n] = arr[i];
    arr[i] = temp;
  }

  return arr.join('');
}

function generatePassword(preferenceObj) {
  let password = [], possible = [];

  // Join possible characters and add one of each to password to ensure at least one of each choice
  if (preferenceObj.lowercase) {
    const lowerArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    password.push(lowerArr[Math.floor(Math.random() * lowerArr.length)]);
    possible = possible.concat(lowerArr);
  }
  if (preferenceObj.uppercase) {
    const upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    password.push(upperArr[Math.floor(Math.random() * upperArr.length)]);
    possible = possible.concat(upperArr);
  }
  if (preferenceObj.numbers) {
    const numArr = '0123456789'.split('');
    password.push(numArr[Math.floor(Math.random() * numArr.length)]);
    possible = possible.concat(numArr);
  }
  if (preferenceObj.symbols) {
    const symbolArr = '!@#$%^&*()'.split('');
    password.push(symbolArr[Math.floor(Math.random() * symbolArr.length)]);
    possible = possible.concat(symbolArr);
  }

  // Generate password array
  for (let i = password.length; i < preferenceObj.length; i++) {
    password.push(possible[Math.floor(Math.random() * possible.length)]);
  }

  // Shuffle array to randomize location of guaranteed characters
  return shuffleArray(password);
}

export default function PasswordGen() {
  const [password, setPassword] = useState(generatePassword(defaultPreferences));
  const [formObj, setFormObj] = useState(defaultPreferences);

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

  function handleSubmit(e) {
    e.preventDefault();
    setPassword(generatePassword(formObj));
  }

  return (
    <main className='PasswordGen'>
      <form className='generatorForm' onSubmit={handleSubmit}>
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
        <h1 id="password">{password}</h1>
      </form>
    </main>
  )
}