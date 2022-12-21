import React, { FC } from "react";
import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";
import Header from "../Header/Header";
interface LayoutProps {
  children: JSX.Element;
  sidebarWidth: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
  headerHeight: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
}

const Layout: FC<LayoutProps> = ({
  children,
  headerHeight,
  sidebarWidth,
  setHeaderHeight,
  setSidebarWidth,
}) => {
  return (
    <div className="layot-container">
      <Sidebar headerHeight={headerHeight} setSidebarWidth={setSidebarWidth} />
      <div className="layot-container__content">
        <Header sidebarWidth={sidebarWidth} setHeaderHeight={setHeaderHeight} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
