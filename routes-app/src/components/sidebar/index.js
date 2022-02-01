import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarEl';

const Sidebar = ({toggle}) => {
  return (
      <SidebarContainer >
          <Icon onClick= {toggle}>
              <CloseIcon  />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="ski" >
                    Ski
                  </SidebarLink>
                  <SidebarLink to="hike" >
                    Hike
                  </SidebarLink>
                  <SidebarLink to="mountain-bike" >
                    Mountain bike
                  </SidebarLink>
                  <SidebarLink to="trail-run" >
                    Trail run
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};
 export default Sidebar;