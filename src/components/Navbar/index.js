import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Form, Button, Input } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

export default function Navbar({ barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, toggle, movieSearch, setSearch, setLoading }) {

  const searching = (e) => {
    setLoading(true)
    setSearch(e.target.value)
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src='/logo_transparent.png' style={{ width: '300px', marginBottom: '20px' }} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Form
                barOpened={barOpened}
                onClick={() => {
                  setBarOpened(true);
                  inputFocus.current.focus();
                }}
                onFocus={() => {
                  setBarOpened(true);
                  inputFocus.current.focus();
                }}
                onBlur={() => {
                  setBarOpened(false);
                }}
                onSubmit={onFormSubmit}
                ref={formRef}
              >
                <Button type="submit" barOpened={barOpened}>
                  <BsSearch />
                </Button>
                <Input
                  onChange={e => searching(e)}
                  ref={inputFocus}
                  value={movieSearch}
                  barOpened={barOpened}
                  placeholder="Search for a movie..."
                />
              </Form>
            </NavItem>
            <NavItem>
              <NavLinks to="/nominations">My Nominations</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}