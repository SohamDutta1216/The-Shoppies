import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, Form, Button, Input, SidebarItem } from './SidebarElements'
import { BsSearch } from 'react-icons/bs'

const Sidebar = ({ input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit, isOpen, toggle, movieSearch, setSearch }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem>
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
                  onChange={e => setSearch(e.target.value)}
                  ref={inputFocus}
                  value={movieSearch}
                  barOpened={barOpened}
                  placeholder="Search for a movie..."
                />
              </Form>
            </SidebarItem>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
