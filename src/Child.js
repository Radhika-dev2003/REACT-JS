import React from 'react'
import './App.css';
 function Child() {
  const handleChange = (value) => {
    localStorage.setItem('name',value);
    console.log(value);
    let store=localStorage.getItem('name');
    console.log(store);
  };
  
    return (
    <div>
 
      <form>
        <label>
          Enter name:
          <input
          type="text"
          name="inputname"
          onChange={(e) =>handleChange(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
 }

export default App;