import React, { useState, useRef, useEffect } from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Form, Button, Input } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

export default function Navbar() {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src='/logo_transparent.png' style={{ width: '300px' }} />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Form
                barOpened={barOpened}
                onClick={() => {
                  // When form clicked, set state of baropened to true and focus the input
                  setBarOpened(true);
                  inputFocus.current.focus();
                }}
                // on focus open search bar
                onFocus={() => {
                  setBarOpened(true);
                  inputFocus.current.focus();
                }}
                // on blur close search bar
                onBlur={() => {
                  setBarOpened(false);
                }}
                // On submit, call the onFormSubmit function
                onSubmit={onFormSubmit}
                ref={formRef}
              >
                <Button type="submit" barOpened={barOpened}>
                  <BsSearch />
                </Button>
                <Input
                  onChange={e => setInput(e.target.value)}
                  ref={inputFocus}
                  value={input}
                  barOpened={barOpened}
                  placeholder="Search for a movie..."
                />
              </Form>
            </NavItem>
            <NavItem>
              <NavLinks to='home'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='nominations'>My Nominations</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}