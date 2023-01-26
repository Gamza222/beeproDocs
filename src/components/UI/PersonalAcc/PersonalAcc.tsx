import React, { FC } from 'react';
import './PersonalAcc.scss';
import { PageProps } from '../../assets/types';

const PersonalAcc: FC<PageProps> = ({
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
      <div className='page-container__content'>
        <h1 className='page-container__title' style={{ marginBottom: '30px' }}>
          Personal account
        </h1>
        <p className='page-container__text'>
          The BEEPRO personal account lives up to its name, being completely
          private and confidential.
        </p>
        <h3 className='personal-acc-title'>
          BEEPRO PERSONAL ACCOUNT BENEFITS:
        </h3>
        <div className='personal-acc-box'>
          <div className='block'>
            <div className='block__left'></div>
            <div className='block__right'></div>
            <p> Instant portfolio synchronization with any wallet</p>
          </div>
          <div className='block'>
            <div className='block__left'></div>
            <div className='block__right'></div>
            <p> Overview of completed transactions</p>
          </div>
          <div className='block'>
            <div className='block__left'></div>
            <div className='block__right'></div>
            <p> Analytics based on selected tokens (Beendexer technology)</p>
          </div>
          <div className='block'>
            <div className='block__left'></div>
            <div className='block__right'></div>
            <p>The audit of brand-new projects and smart contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAcc;
