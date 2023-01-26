import React, { FC } from 'react';
import './Links.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/bot-pic.png';
import { BsTelegram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Links: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
  return (
    <div
      className='page-container'
      style={{
        left: sidebarOpen ? `${sidebarWidth}px` : '0',
        top: `${headerHeight}px`,
      }}
    >
      <div className='page-container__content' style={{ position: 'relative' }}>
        <div className='page-container__content__content'>
          <h1
            className='page-container__title'
            style={{ marginBottom: '25px' }}
          >
            Links
          </h1>
          <div className='links-container'>
            <div className='block links-block'>
              <a
                href='https://t.me/BeePro_chat'
                className='links-container__link'
              >
                <BsTelegram />
                <p>Telegram</p>
              </a>
            </div>
            <div className='block links-block'>
              <a
                href='https://instagram.com/beeprodex?igshid=YmMyMTA2M2Y='
                className='links-container__link'
              >
                <BsInstagram />
                <p>Instagram</p>
              </a>
            </div>
            <div className='block links-block'>
              <a
                href='https://twitter.com/dexbeepro?s=21&t=bzq_RZ2MlpHQC9fEMUGxYw'
                className='links-container__link'
              >
                <BsTwitter />
                <p>Twitter</p>
              </a>
            </div>
            <div className='block links-block'>
              <a
                href='https://discord.com/invite/5BCv3dXRPw'
                className='links-container__link'
              >
                <FaDiscord />
                <p>Discord</p>
              </a>
            </div>
            <div className='block links-block'>
              <a
                href='https://www.youtube.com/channel/UCl-m3A8BkoygIQz7wRUDv_A'
                className='links-container__link'
              >
                <BsYoutube />
                <p>YouTube</p>
              </a>
            </div>
          </div>
        </div>
        <img src={bottomPic} alt='' className='bot-logo-bottom' />
      </div>
    </div>
  );
};

export default Links;
