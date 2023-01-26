import React, { FC, useEffect, useRef, useState } from 'react';
import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import { Size } from '../../assets/types';
interface LayoutProps {
  sidebarWidth: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
  headerHeight: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: FC<LayoutProps> = ({
  headerHeight,
  sidebarWidth,
  setHeaderHeight,
  setSidebarWidth,
  sidebarOpen,
  setSidebarOpen,
}) => {
  //open state for sidebar
  const [sidebarOpenSm, setSidebarOpenSm] = useState<boolean>(true);

  //state for darkmode
  const [dark, setDark] = useState<boolean>(false);

  // The size of the window
  const [size, setSize] = useState<Size>();

  //header ref
  const menuRef = useRef<any>();

  // This function updates the state thus re-render components
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  //set sidebar width
  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);
    if (size?.width) {
      if (size.width > 1400) {
        setSidebarOpen(true);
      }
    }

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', resizeHanlder);
    };
  }, [size]);

  console.log('niga', size?.width);
  return (
    <div
      className={`layot-container ${dark ? 'darkmode' : ''}`}
      style={{
        height: `${
          sidebarOpen && size?.width && size.width < 900 ? 0 : '100%'
        }`,
        overflow: `${
          sidebarOpen && size?.width && size.width < 900 ? 'hidden' : 'auto'
        }`,
      }}
    >
      <Sidebar
        headerHeight={headerHeight}
        setSidebarWidth={setSidebarWidth}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        sidebarOpenSm={sidebarOpenSm}
        setSidebarOpenSm={setSidebarOpenSm}
        sideBarWidth={sidebarWidth}
        headerRef={menuRef}
      />
      <div className='layot-container__content'>
        <Header
          sidebarWidth={sidebarWidth}
          setHeaderHeight={setHeaderHeight}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          menuRef={menuRef}
          dark={dark}
          setDark={setDark}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
