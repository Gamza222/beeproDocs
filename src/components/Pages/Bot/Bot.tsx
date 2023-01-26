import React, { FC } from 'react';
import './Bot.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/bot-pic.png';

const Bot: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
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
            Automated bot
          </h1>
          <p className='page-container__text'>
            In addition to our platform, we intend to introduce a robot that
            will be trained to automatically execute orders on prospective
            tokens across all decentralized exchanges. We are going to launch
            the robot in parallel with our platform. Our robot, which was
            developed based on Beendexer technology, will have access to
            information on the history of user activity, changes in reliability,
            and liquidity rating. The robot will assist you in finding new
            projects with lucrative contracts that have just been listed on the
            market (within a few days of the listing's first publication).
          </p>
          <p className='page-container__text'>
            It will add these projects to your portfolio if the suitable choice
            is accepted.
          </p>
        </div>
        <img src={bottomPic} alt='' className='bot-logo-bottom' />
      </div>
    </div>
  );
};

export default Bot;
