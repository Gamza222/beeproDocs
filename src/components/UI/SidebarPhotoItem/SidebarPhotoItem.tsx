import React, { FC, useEffect, useState } from 'react';
import './SidebarPhotoItem.scss';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

interface SidebarPhotoItemProps {
  photo?: string;
  title: string;
  url: string;
  suburls?: {
    name: string;
    url: string;
  }[];
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarPhotoItem: FC<SidebarPhotoItemProps> = ({
  photo,
  title,
  url,
  suburls,
  setSidebarOpen,
}) => {
  //state for opening submenu
  const [open, setOpen] = useState<boolean>(false);

  //func that navigates to url
  const navigate = useNavigate();

  //url
  const currUrl = window.location.href;

  const directories = currUrl.split('/');

  const lastDirecotry = directories[directories.length - 1];

  useEffect(() => {
    if (!suburls && `/${lastDirecotry}` !== url) {
      setOpen(false);
    }
  });

  const settingSideBar = () => {
    if (window.innerWidth < 900) {
      setSidebarOpen(false);
    }
  };
  const settingOpen = () => {
    if (`/${lastDirecotry}` !== url && open == true) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <button
        className={`SidebarPhotoItem-container ${open ? 'link-open' : ''} ${
          open == true && `/${lastDirecotry}` !== url ? 'link-semiopen' : ''
        }`}
        onClick={() => {
          settingOpen();
          navigate(url);
          settingSideBar();
        }}
      >
        <div className='SidebarPhotoItem-container__left'>
          {photo ? <img src={photo} alt={`${title}-logo`} /> : ''}
          <p className={`${open && photo ? 'link-text-open' : ''}`}>{title}</p>
        </div>
        <MdOutlineArrowForwardIos
          style={{ display: suburls ? 'block' : 'none' }}
          className={`SidebarPhotoItem-container__arrow ${
            open ? 'link-open-arrow' : ''
          }`}
        />
      </button>
      {suburls ? (
        <SidebarMenu open={open} sm={true}>
          {suburls.map((item, key) => {
            return (
              <SidebarPhotoItem
                title={item.name}
                url={item.url}
                key={key}
                setSidebarOpen={setSidebarOpen}
              />
            );
          })}
        </SidebarMenu>
      ) : (
        ''
      )}
    </>
  );
};

export default SidebarPhotoItem;
