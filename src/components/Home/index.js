import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Movies from '../Movies'
import './Home.css'

const Home = ({ input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, isOpen, setIsOpen, toggle, movieSearch, setSearch, results }) => {


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} movieSearch={movieSearch} setSearch={setSearch} />

      <Navbar toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} movieSearch={movieSearch} setSearch={setSearch} />

      <Movies results={results} />
    </div>
  )
}

export default Home
