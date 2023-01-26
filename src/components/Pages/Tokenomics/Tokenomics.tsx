import React, { FC } from 'react';
import './Tokenomics.scss';
import { PageProps } from '../../assets/types';
import tokenomWhite from '../../assets/images/pages/tokenomics-big-white.png';
import tokenomBlack from '../../assets/images/pages/tokenomics-big-black.png';
import tokenomBlackSm from '../../assets/images/pages/tokenomics-sm-black.png';
import tokenomWhiteSm from '../../assets/images/pages/tokenomics-sm-white.png';
import textPic from '../../assets/images/pages/text-item-pic.svg';

const Tokenomics: FC<PageProps> = ({
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
        <h1 className='page-container__title' style={{ marginBottom: '20px' }}>
          THE BEEPRO TOKENOMICS
        </h1>
        <p className='page-container__text'>
          If you're a potential buyer, you're probably wondering, "How will the
          tokens get into the hands of people?" The following launch and
          distribution strategy will deal with this problem. You may also see
          the proportion of tokens we've allocated to put our ideas into action
          throughout platform development and audience engagement.
        </p>
        <p
          className='page-container__text'
          style={{ textAlign: 'center', justifyContent: 'center' }}
        >
          Honeycomb distribution diagram.
        </p>
        <div
          style={{ width: 'fit-content', margin: '0 auto' }}
          className='block block-tokenomics'
        >
          <p
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              padding: '0 80px',
            }}
          >
            <span>total supply</span>
            ONE BILLION
          </p>
        </div>
        <img
          src={tokenomWhite}
          alt=''
          className='page-container-tokenomics-img-white'
        />
        <img
          src={tokenomBlack}
          alt=''
          className='page-container-tokenomics-img'
        />
        <img
          src={tokenomWhiteSm}
          alt=''
          className='page-container-tokenomics-img-white-sm'
        />
        <img
          src={tokenomBlackSm}
          alt=''
          className='page-container-tokenomics-img-sm'
        />
        <p className='page-container__text'>
          As an aesthetic touch, I suggest drawing a little icon before each
          item (such as a chest for the treasury, a few little men for a private
          round, a handshake for a private round, a germinating sprout for a
          seed round, a bee for a team ...)
        </p>
        <p className='page-container__text'>
          - Seed round. At this point, we provide investors with early access to
          the token we are developing.
        </p>
        <p className='page-container__text'>
          - Private round. At this point in the process, partners and authorized
          users from the white list are granted access to the token. Members of
          an engaged audience are rewarded for taking part in a variety of
          promotional activities for the platform. The prerequisite is to
          subscribe to our various social networks or repost content from
          others.
        </p>
        <p className='page-container__text'>
          - Public round. The coin is available to the public at this
          moment.-Public round. The token is available to the public at this
          moment.
        </p>
        <p className='page-container__text'>
          <img src={textPic} alt='' />
          Liquidity pool. It provides stable liquidity.
        </p>
        <p className='page-container__text'>
          <img src={textPic} alt='' />
          Team. Given that the project team has an impact on the token price and
          can pose a risk to investors, this portion will be locked for the
          first month (the "cliff"). This way, we try to maintain trust and
          interest in further participation.
        </p>
        <p className='page-container__text'>
          <img src={textPic} alt='' />
          Events. Funds are reserved for implementing our ideas, which may
          include events and miniature games.
        </p>
        <p className='page-container__text'>
          <img src={textPic} alt='' />
          Treasury. Our safety cushion to maintain the project's stability.
        </p>
        <p className='page-container__text'>
          The entire volume of all tokens generated should equal one billion,
          which is referred to as the "total supply." Some of the tokens that
          were acquired are temporarily frozen for a period that was previously
          established in the smart contract to prevent an uncontrolled increase
          in demand from causing the exchange rate to collapse.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
