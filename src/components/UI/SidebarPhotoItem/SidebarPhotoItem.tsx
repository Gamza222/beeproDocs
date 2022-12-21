import React, { FC, useState } from "react";
import "./SidebarPhotoItem.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

interface SidebarPhotoItemProps {
  photo?: string;
  title: string;
  url: string;
  suburls?: {
    name: string;
    url: string;
  }[];
}

const SidebarPhotoItem: FC<SidebarPhotoItemProps> = ({
  photo,
  title,
  url,
  suburls,
}) => {
  //state for opening submenu
  const [open, setOpen] = useState<boolean>(false);

  //func that navigates to url
  const navigate = useNavigate();

  //url
  console.log(window.location.href);
  return (
    <>
      <button
        className={`SidebarPhotoItem-container ${open ? "link-open" : ""} $`}
        onClick={() => {
          setOpen(!open);
          navigate(url);
        }}
      >
        <div className="SidebarPhotoItem-container__left">
          {photo ? <img src={photo} alt={`${title}-logo`} /> : ""}
          <p className={`${open && photo ? "link-text-open" : ""}`}>{title}</p>
        </div>
        <MdOutlineArrowForwardIos
          style={{ display: suburls ? "block" : "none" }}
          className={`SidebarPhotoItem-container__arrow ${
            open ? "link-open-arrow" : ""
          }`}
        />
      </button>
      {suburls ? (
        <SidebarMenu open={open}>
          {suburls.map((item, key) => {
            return (
              <SidebarPhotoItem title={item.name} url={item.url} key={key} />
            );
          })}
        </SidebarMenu>
      ) : (
        ""
      )}
    </>
  );
};

export default SidebarPhotoItem;
