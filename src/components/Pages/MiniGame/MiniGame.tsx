import React, { FC } from 'react';
import './MiniGame.scss';
import { PageProps } from '../../assets/types';

const MiniGame: FC<PageProps> = ({
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
        <h1 className='page-container__title'>Mini Game and Meta</h1>
        <p className='page-container__text'>
          we have a fairly large industry with nft, we plan to initially add
          metaverse with staking, at first it will be in 2d format, but over
          time we will transfer it to 3d and add many opportunities for the
          internal market.(by default, it will be possible to sell/buy/rent
          land) Before meta we will make a mini-game in which you will need to
          use nft, after which you will carry out your own small analysis of the
          project according to the initial data and predict growth or decline.
          We will have three collections, each of which is better than the
          previous one, the winnings in the form of a token will vary from the
          collection used. For example in the third collection, the winnings
          will be much greater than in the first. In fact, NFT gives access to
          the event.
        </p>
        <p className='page-container__text'>
          The game is running as an event, we will not make it initially very
          global and in general, everything that comes from the event is for the
          audience to win, but everything that has a connection with the event
          will be relatively quickly and often change to something new for a
          variety of content
        </p>
      </div>
    </div>
  );
};

export default MiniGame;
