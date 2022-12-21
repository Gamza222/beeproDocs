import React, { FC, useEffect, useRef, useState } from "react";
import "./Header.scss";
import menuPic from "../../assets/images/header/menu-pic.svg";
import Logo from "../../assets/images/header/logo.svg";
import { Size } from "../../assets/types";

interface HeaderProps {
  sidebarWidth: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Header: FC<HeaderProps> = ({ sidebarWidth, setHeaderHeight }) => {
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

  const headerRef = useRef(null);

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
      style={{ left: `${sidebarWidth + 2}px` }}
    >
      <button className="header-container__menu-btn">
        <img src={menuPic} alt="btn-menu" />
      </button>
      <a href="/" className="header-container__logo">
        <img src={Logo} alt="" />
        <p>beepro</p>
      </a>
    </div>
  );
};

export default Header;
