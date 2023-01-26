import React, { FC, useEffect, useRef, useState } from 'react';
import './Sidebar.scss';
import { Size } from '../../assets/types';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { useNavigate } from 'react-router';
import SidebarPhotoItem from '../SidebarPhotoItem/SidebarPhotoItem';
import logoPic from '../../assets/images/sidebar/logo-pic.svg';
import accPic from '../../assets/images/sidebar/acc-pic.svg';
import dexPic from '../../assets/images/sidebar/dex-pic.svg';
import exchangePic from '../../assets/images/sidebar/exchange-pic.svg';
import linksPic from '../../assets/images/sidebar/links-pic.svg';
import nftPic from '../../assets/images/sidebar/nft-pic.svg';
import roadmapPic from '../../assets/images/sidebar/roadmap-pic.svg';
import teamPic from '../../assets/images/sidebar/team-pic.svg';
import tokenPic from '../../assets/images/sidebar/token-pic.svg';
import { VscChromeClose } from 'react-icons/vsc';
import { BiLinkExternal } from 'react-icons/bi';

interface SidebarProps {
  headerHeight: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
  setSidebarOpenSm: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpenSm: boolean;
  sideBarWidth: number;
  headerRef: React.MutableRefObject<any>;
}

const Sidebar: FC<SidebarProps> = ({
  headerHeight,
  setSidebarWidth,
  setSidebarOpen,
  sidebarOpen,
  setSidebarOpenSm,
  sidebarOpenSm,
  sideBarWidth,
  headerRef,
}) => {
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

  const sidebarRef = useRef<any>(null);

  //set sidebar width
  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);
    if (sidebarRef.current != null) {
      setSidebarWidth(sidebarRef.current['clientWidth']);
    }
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', resizeHanlder);
    };
  }, [size]);
  //set sidebar width
  useEffect(() => {
    if (size?.width) {
      if (size.width > 900) {
        setSidebarOpen(true);
      }
    }
  }, [size]);

  useEffect(() => {
    resizeHanlder();
  }, []);
  //func that navigates to url
  const navigate = useNavigate();

  //url
  const currUrl = window.location.href;

  const directories = currUrl.split('/');

  const lastDirecotry = directories[directories.length - 1];
  //url

  //close sidebar on clickOutside
  useEffect(() => {
    console.log('SSS', sidebarOpen);
    //function that close sidebar on clickOutside
    function closeOnCkickOutside(event: any) {
      console.log(sideBarWidth);
      if (size?.width) {
        console.log(size.width);
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target) &&
          size?.width <= 900 &&
          !event.target.closest('#menu-btn')
        ) {
          console.log('sss');

          if (sidebarOpen) {
            setSidebarOpen(false);
            console.log(event.target);
          }
        }
      }
    }

    document.addEventListener('click', closeOnCkickOutside);
    return () => {
      document.removeEventListener('click', closeOnCkickOutside);
    };
  }, [sidebarRef, size]);

  return (
    <div
      className={`sidebar-container ${
        sidebarOpen || (size?.width && size.width > 900)
          ? ''
          : 'sidebar-container-close'
      }`}
      ref={sidebarRef}
    >
      <div
        className='sidebar-container__header'
        style={{ height: `${headerHeight}px` }}
      >
        <button
          className='sidebar-container__header__close-btn'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <VscChromeClose />
        </button>
      </div>
      <div className='sidebar-container__content'>
        {/*
        <button
          className={`sidebar-container__content__main-btn ${
            open ? "link-open" : ""
          } ${
            open == true && `/${lastDirecotry}` !== "/" ? "link-semiopen" : ""
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
        */}
        <SidebarMenu open={open}>
          <SidebarPhotoItem
            title='BEEPRO'
            url='/'
            setSidebarOpen={setSidebarOpen}
            photo={logoPic}
            suburls={[
              { name: 'Market issues', url: '/marketIssues' },
              {
                name: 'Our brand - New technology',
                url: '/brand',
              },
            ]}
          />
          <SidebarPhotoItem
            title='Beendexer'
            setSidebarOpen={setSidebarOpen}
            url='/beendexter'
            photo={dexPic}
            suburls={[
              { name: 'Wallet', url: '/wallet' },
              { name: 'Automated bot', url: '/bot' },
            ]}
          />
          <SidebarPhotoItem
            title='Dex exchange'
            setSidebarOpen={setSidebarOpen}
            url='/exhange'
            photo={exchangePic}
          />
          <SidebarPhotoItem
            title='Personal account'
            setSidebarOpen={setSidebarOpen}
            url='/personalAcc'
            photo={accPic}
          />
          <SidebarPhotoItem
            title='Token'
            setSidebarOpen={setSidebarOpen}
            url='/token'
            photo={tokenPic}
            suburls={[{ name: 'THE BEEPRO TOKENOMICS', url: '/tokenomics' }]}
          />
          <SidebarPhotoItem
            title='NFT'
            setSidebarOpen={setSidebarOpen}
            url='/nft'
            photo={nftPic}
            suburls={[{ name: 'Mini game and meta', url: '/miniGame' }]}
          />
          <SidebarPhotoItem
            title='Roadmap'
            setSidebarOpen={setSidebarOpen}
            url='/roadmap'
            photo={roadmapPic}
          />
          <SidebarPhotoItem
            title='Team'
            setSidebarOpen={setSidebarOpen}
            url='/team'
            photo={teamPic}
          />
          <SidebarPhotoItem
            title='Links'
            setSidebarOpen={setSidebarOpen}
            url='/links'
            photo={linksPic}
          />
        </SidebarMenu>
        <div className='sidebar-container__content__guides'>
          <p>Guides</p>
          <a href='https://drive.google.com/file/d/1FJZ0UovpIP632i4vVfVpOX1KIpv8iPms/view'>
            Original Whitepaper
            <BiLinkExternal />
          </a>
          <a href='https://radiant-kangaroo-58a0a1.netlify.app/'>
            Tokenomics
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
