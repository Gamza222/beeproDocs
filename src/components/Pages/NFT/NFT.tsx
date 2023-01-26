import React, { FC } from 'react';
import { PageProps } from '../../assets/types';
import './NFT.scss';
import common from '../../assets/images/pages/nft-common.png';
import immortal from '../../assets/images/pages/nft-immortal.png';
import mythical from '../../assets/images/pages/nft-mythical.png';

const NFT: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
  return (
    <div
      className='page-container'
      style={{
        left: sidebarOpen ? `${sidebarWidth}px` : '0',
        top: `${headerHeight}px`,
      }}
    >
      <div className='page-container__content'>
        <h1 className='page-container__title'>NFT</h1>
        <div className='page-container__nfts'>
          <img src={common} alt='common-nft' />
          <img src={immortal} alt='immortal-nft' />
          <img src={mythical} alt='mythical-nft' />
        </div>
      </div>
    </div>
  );
};

export default NFT;
