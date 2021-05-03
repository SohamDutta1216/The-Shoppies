import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = (input, setInput, barOpened, setBarOpened, formRef, inputFocus, onFormSubmit) => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>

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
