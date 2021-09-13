import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Quote from './components/Quote';
import logo from './assets/kanyey.gif';

function App() {
  const [quote, setQuote] = useState([])
  

  return (
    <div className="App">
      <Header />
    <img src={logo} alt="loading..." width="200px"/><br></br>
      <Button setQuote = {setQuote}/>
      <Quote quote = {quote}/>
    </div>
  );
}

export default App;
