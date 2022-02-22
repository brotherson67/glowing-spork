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
                  <SidebarLink to="/ski" onClick= {toggle}>
                    Ski
                  </SidebarLink>
                  <SidebarLink to="/mountain-bike" onClick= {toggle}>
                    Mountain bike
                  </SidebarLink>
                  <SidebarLink to="/trail-run" onClick= {toggle}>
                    Trail run
                  </SidebarLink>
                  <SidebarLink to="/strava" onClick= {toggle}>
                    Strava
                  </SidebarLink>
                  <SidebarLink to="/profile" onClick= {toggle}>
                    Profile
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};
 export default Sidebar;