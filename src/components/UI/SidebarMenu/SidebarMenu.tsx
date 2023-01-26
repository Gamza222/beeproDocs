import React, { FC } from 'react';
import './SidebarMenu.scss';
import { Outlet } from 'react-router';

interface SidebarMenuProps {
  open: boolean;
  children: JSX.Element | JSX.Element[];
  sm?: boolean;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ children, open, sm }) => {
  return (
    <div
      className={`sidebarMenu-container ${
        sm ? '' : 'sidebarMenu-container-before'
      }`}
      style={{
        maxHeight: open ? '1000px' : '0px',
        display: open ? 'flex' : 'none',
        padding: sm ? '20px 1px 15px 21px' : '',
      }}
    >
      {children}
    </div>
  );
};

export default SidebarMenu;
