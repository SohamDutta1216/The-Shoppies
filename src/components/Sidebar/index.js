import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, Form, Button, Input } from './SidebarElements'
import { BsSearch } from 'react-icons/bs'

const Sidebar = ({ input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink>
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
                  onChange={e => setInput(e.target.value)}
                  ref={inputFocus}
                  value={input}
                  barOpened={barOpened}
                  placeholder="Search for a movie..."
                />
              </Form>
            </SidebarLink>
            <SidebarLink to='/home'>
              Home
            </SidebarLink>
            <SidebarLink to='/nominations'>
              My Nominations
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
