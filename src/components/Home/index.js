import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Home = ({ input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, isOpen, setIsOpen, toggle }) => {


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <Navbar toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} />
    </div>
  )
}

export default Home
