import React, { FC } from "react";
import "./SidebarMenu.scss";
import { Outlet } from "react-router";

interface SidebarMenuProps {
  open: boolean;
  children: JSX.Element | JSX.Element[];
}

const SidebarMenu: FC<SidebarMenuProps> = ({ children, open }) => {
  return (
    <div
      className="sidebarMenu-container"
      style={{
        maxHeight: open ? "1000px" : "0px",
        visibility: open ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default SidebarMenu;
