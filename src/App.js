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
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onFormSubmit = e => {
    e.preventDefault();
    setLoading(true)
    setBarOpened(false);
    setSearch(movieSearch)
  };
  return (
    <Router>
      <div>
        <Home barOpened={barOpened} setBarOpened={setBarOpened} movieSearch={movieSearch} setSearch={setSearch} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} results={results} isLoading={isLoading} setLoading={setLoading} nominations={nominations} setNominations={setNominations} />
      </div>
    </Router>
  );
}

export default App;
