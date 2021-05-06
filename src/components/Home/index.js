import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Movies from '../Movies'
import Nominations from '../Nominations'
import './home.css'

const Home = ({ input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, isOpen, setIsOpen, toggle, movieSearch, setSearch, results, isLoading, setLoading, nominations, setNominations }) => {


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} movieSearch={movieSearch} setSearch={setSearch} />

      <Navbar toggle={toggle} barOpened={barOpened} setBarOpened={setBarOpened} input={input} setInput={setInput} formRef={formRef} inputFocus={inputFocus} onFormSubmit={onFormSubmit} movieSearch={movieSearch} setSearch={setSearch} setLoading={setLoading} />

      <h2 className='title'>Movies</h2>
      <Movies results={results} isLoading={isLoading} nominations={nominations} setNominations={setNominations} />
      <h2 className='title'>Nominations</h2>
      <Nominations nominations={nominations} setNominations={setNominations} />
    </div>

  )
}

export default Home
