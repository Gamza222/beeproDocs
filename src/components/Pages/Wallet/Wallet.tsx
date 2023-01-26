import React, { FC } from 'react';
import './Wallet.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/token-logo.png';

const Wallet: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
  return (
    <div
      className='page-container'
      style={{
        left: sidebarOpen ? `${sidebarWidth}px` : '0',
        top: `${headerHeight}px`,
      }}
    >
      <div
        className='page-container__top-pic'
        style={{ backgroundImage: `url(${topPic})` }}
      ></div>
      <div className='page-container__content' style={{ position: 'relative' }}>
        <div className='page-container__content__content'>
          <h1
            className='page-container__title'
            style={{ marginBottom: '25px' }}
          >
            Wallet
          </h1>
          <p className='page-container__text'>
            Beepro will introduce its own wallet in the near future.
          </p>
          <p className='page-container__text'>
            There are no unnecessary actions on the dex exchanges, all that
            unites it with the user is the wallet. (So its very important
            thing). Usually clients of dex use metamask or trust wallet, by the
            way these wallets are easy to use and indispensable in the dex
            industry, however, we will implement a wallet into which we will
            integrate a whole analytical software package based on dex
            (beendexer), actually it will be fully adopted for web3 and dapps of
            various mobile platforms, we will add an integrated browser and
            browser extension for desktops to simplify interaction in our
            ecosystem.
          </p>
        </div>
        <img src={bottomPic} alt='' className='wallet-logo-bottom' />
      </div>
    </div>
  );
};

export default Wallet;
