import React, { FC } from 'react';
import './Roadmap.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/roadmap-pic.png';

const Roadmap: FC<PageProps> = ({
  headerHeight,
  sidebarWidth,
  sidebarOpen,
}) => {
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
            Roadmap
          </h1>
          <div className='roadmap-content'>
            <div className='roadmap-content__box'>
              <h4 className='roadmap-content__box__title'>2022Q4</h4>
              <div className='block roadmap-block'>
                <p>Token launch</p>
              </div>
              <div className='block roadmap-block'>
                <p>WEB application launch</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>Providing support for performed transactions</p>
              </div>
            </div>
            <div className='roadmap-content__box'>
              <h4 className='roadmap-content__box__title'>2023Q1</h4>
              <div className='block roadmap-block'>
                <p>Custom trading analytics</p>
              </div>
            </div>
            <div className='roadmap-content__box'>
              <h4 className='roadmap-content__box__title'>2023Q2</h4>
              <div className='block roadmap-block'>
                <p>Token statistics overview</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>Analytics of a new token’s perspective</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>
                  Paid API to access data we've gathered on tokens, addresses,
                  and contracts; increasing demand for the BEEPRO token
                </p>
              </div>
            </div>
            <div className='roadmap-content__box'>
              <h4 className='roadmap-content__box__title'>2023Q2</h4>
              <div className='block roadmap-block'>
                <p>Telegram bot</p>
              </div>
              <div className='block roadmap-block'>
                <p>Wallet</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>Ability to automatically purchase new promising tokens</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>Ability to automatically sell purchased tokens</p>
              </div>
            </div>
            <div
              className='roadmap-content__box'
              style={{ gridColumn: 3, gridRow: '2', justifyContent: 'end' }}
            >
              <h4 className='roadmap-content__box__title'>2023Q4</h4>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>Launch of a Telegram wallet for tokens</p>
              </div>
              <div
                className='block roadmap-block'
                style={{ textAlign: 'start' }}
              >
                <p>
                  The function of checking tokens directly from the Telegram
                  walletROADMAP
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bottomPic} alt='' className='roadmap-logo-bottom' />
      </div>
    </div>
  );
};

export default Roadmap;
