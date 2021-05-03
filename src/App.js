import React, { useState, useRef } from "react";
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import FetchData from './hooks/fetchData'

function App() {
  const {
    results,
    movieSearch,
    isLoading,
    setSearch,
    setLoading,
    nominations,
    setNominations,
    nominNum, setNominNum
  } = FetchData();

  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <Router>
      <div>
        <Home barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      </div>
    </Router>
  );
}

export default App;
