import React, { FC, useEffect, useRef, useState } from "react";
import "./Header.scss";
import menuPic from "../../assets/images/header/menu-pic.svg";
import Logo from "../../assets/images/header/logo.svg";
import { Size } from "../../assets/types";
import { VscChromeClose } from "react-icons/vsc";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

interface HeaderProps {
  sidebarWidth: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
  menuRef: React.MutableRefObject<any>;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({
  sidebarWidth,
  setHeaderHeight,
  setSidebarOpen,
  sidebarOpen,
  menuRef,
  dark,
  setDark,
}) => {
  // The size of the window
  const [size, setSize] = useState<Size>();

  // This function updates the state thus re-render components
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  const headerRef = useRef<any>(null);

  console.log(sidebarWidth);

  //set sidebar width
  useEffect(() => {
    window.addEventListener("resize", resizeHanlder);
    if (headerRef.current != null) {
      setHeaderHeight(headerRef.current["clientHeight"]);
    }
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, [size]);

  return (
    <div
      className="header-container"
      ref={headerRef}
      style={{ left: sidebarOpen ? `${sidebarWidth + 2}px` : "0" }}
    >
      <button
        className="header-container__menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <img src={menuPic} alt="btn-menu" ref={menuRef} />
      </button>
      <button
        className="header-container__menu-btn-sm"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <VscChromeClose />
        ) : (
          <img src={menuPic} alt="btn-menu" id="menu-btn" ref={menuRef} />
        )}
      </button>
      <a href="/" className="header-container__logo">
        <img src={Logo} alt="" />
        <p>beepro</p>
      </a>
      <button
        className="header-container__darkmode"
        onClick={() => setDark(!dark)}
      >
        {dark ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Header;
