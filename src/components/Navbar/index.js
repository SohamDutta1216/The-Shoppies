import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <h1>Shoppies</h1>
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='home'>Home</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}