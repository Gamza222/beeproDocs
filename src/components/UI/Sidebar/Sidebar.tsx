import React, { FC, useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import { Size } from "../../assets/types";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { useNavigate } from "react-router";
import SidebarPhotoItem from "../SidebarPhotoItem/SidebarPhotoItem";
import logoPic from "../../assets/images/sidebar/logo-pic.svg";
import accPic from "../../assets/images/sidebar/acc-pic.svg";
import dexPic from "../../assets/images/sidebar/dex-pic.svg";
import exchangePic from "../../assets/images/sidebar/exchange-pic.svg";
import linksPic from "../../assets/images/sidebar/links-pic.svg";
import nftPic from "../../assets/images/sidebar/nft-pic.svg";
import roadmapPic from "../../assets/images/sidebar/roadmap-pic.svg";
import teamPic from "../../assets/images/sidebar/team-pic.svg";
import tokenPic from "../../assets/images/sidebar/token-pic.svg";

interface SidebarProps {
  headerHeight: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: FC<SidebarProps> = ({ headerHeight, setSidebarWidth }) => {
  //open state for main btn
  const [open, setOpen] = useState<boolean>(true);

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

  const sidebarRef = useRef(null);

  console.log(headerHeight);

  //set sidebar width
  useEffect(() => {
    window.addEventListener("resize", resizeHanlder);
    if (sidebarRef.current != null) {
      setSidebarWidth(sidebarRef.current["clientWidth"]);
    }
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, [size]);

  //func that navigates to url
  const navigate = useNavigate();
  return (
    <div className="sidebar-container" ref={sidebarRef}>
      <div
        className="sidebar-container__header"
        style={{ height: `${headerHeight}px` }}
      >
        <button className="sidebar-container__header__close-btn"></button>
      </div>
      <div className="sidebar-container__content">
        <button
          className={`sidebar-container__content__main-btn ${
            open ? "link-open" : ""
          }`}
          onClick={() => {
            setOpen(!open);
            navigate("/");
          }}
        >
          <p>BEEPRO Whitepaper</p>
          <MdOutlineArrowForwardIos
            className={`sidebar-container__content__main-btn__arrow ${
              open ? "link-open-arrow" : ""
            }`}
          />
        </button>
        <SidebarMenu open={open}>
          <SidebarPhotoItem
            title="BEEPRO"
            url="/beepro"
            photo={logoPic}
            suburls={[
              { name: "Market issues", url: "marketIssues" },
              {
                name: "Our brand - New technology",
                url: "marketIssues",
              },
            ]}
          />
        </SidebarMenu>
      </div>
    </div>
  );
};

export default Sidebar;
