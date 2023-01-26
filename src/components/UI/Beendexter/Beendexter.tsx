import React, { FC } from 'react';
import './Beendexter.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/beendexter-bottom-pic.png';

const Beendexter: FC<PageProps> = ({
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
            Beendexer
          </h1>
          <p className='page-container__text'>
            The Beendexer technology is one-of-a-kind. It helps you get access
            to advanced analytics for all cryptocurrency projects.
          </p>
          <p className='page-container__text'>
            Beendexer provides an analysis and evaluation of the entire
            blockchain network to acquire comprehensive data on digital assets.
            In order to provide a reliability rating to a token and evaluate the
            prospects for its further development, our system takes into
            consideration usage statistics, price dynamics, and other relevant
            indicators. This factor allows us to predict how reliable and secure
            a particular token will be in the future. Your personal account will
            have access to every piece of information that has been requested
            related to the required token.
          </p>
          <p className='page-container__text'>
            We guarantee that the token will always be in circulation as
            currency and that its value will never depreciate.
          </p>
          <h3 className='beendexter-title-box'>
            POTENTIAL MISTAKES IN SELECTION OF ICO-PROJECT
          </h3>
          <div className='beendexter-boxes'>
            <div className='beendexter-boxes-box-wrapper'>
              <div className='beendexter-boxes-box'>
                <p>1. Lack of prospects for further growth </p>
              </div>
            </div>
            <div className='beendexter-boxes-box-wrapper'>
              <div className='beendexter-boxes-box'>
                <p>2. Lack of demand</p>
              </div>
            </div>
            <div className='beendexter-boxes-box-wrapper'>
              <div className='beendexter-boxes-box'>
                <p>3. Lack of goals</p>
              </div>
            </div>
            <div className='beendexter-boxes-box-wrapper'>
              <div className='beendexter-boxes-box'>
                <p>4. Unreliability </p>
              </div>
            </div>
            <div className='beendexter-boxes-box-wrapper'>
              <div className='beendexter-boxes-box'>
                <p>5. Depending on the information field</p>
              </div>
            </div>
          </div>

          <p className='page-container__text'>
            Beendexer bypasses the blockchain from the genesis block (from block
            number 0) and records information about all movements of funds in
            the blockchain currency, so main functions consist in detect token
            contracts, record token transfers, rise of liquidity to exchanges,
            blocking of liquidity. In a test environment, it tries to perform
            all the main functions of token contracts.
          </p>
          <p className='page-container__text'>
            Beendexer evaluate existing tokens and highlight the parameters and
            patterns that correspond to successful projects.
          </p>
          <h3
            className='beendexter-title-box'
            style={{ textAlign: 'start', marginTop: '100px' }}
          >
            Based on the information collected:
          </h3>
          <div className='our-brand-blocks1 blocks'>
            <div className='block'>
              <p>
                – analyzes new and existing contracts/tokens, giving them a
                rating from 0 to 100
              </p>
            </div>
            <div className='block'>
              <p>
                – collects information on all created and executed buy-and-sell
                orders
              </p>
            </div>
            <div className='block'>
              <p>
                – collects information about the ownership of tokens by all
                users
              </p>
            </div>
          </div>
        </div>
        <img src={bottomPic} alt='' className='beendexter-logo-bottom' />
      </div>
    </div>
  );
};

export default Beendexter;
