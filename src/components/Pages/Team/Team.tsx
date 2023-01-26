import React, { FC } from 'react';
import './Team.scss';
import { PageProps } from '../../assets/types';
import topPic from '../../assets/images/pages/beendexter-top-pic.png';
import bottomPic from '../../assets/images/pages/roadmap-pic.png';
import teamBg from '../../assets/images/pages/team-bg.png';
import ise from '../../assets/images/pages/ise.svg';
import qvant from '../../assets/images/pages/qvant.svg';
import jay from '../../assets/images/pages/jay.svg';
import sj from '../../assets/images/pages/sj.svg';
import lem from '../../assets/images/pages/lem.svg';
import forse from '../../assets/images/pages/forse.svg';
import calyp from '../../assets/images/pages/calyp.svg';
import face from '../../assets/images/pages/face.svg';
import mk from '../../assets/images/pages/mk.svg';
import logoBottom from '../../assets/images/pages/token-logo.png';

const Team: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
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
            Team
          </h1>
          <div className='team-boxes'>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={qvant}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '7px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Qvant</h5>
                <p>CEO</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={ise}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>I Se</h5>
                <p>COO, Co-founder</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={jay}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Jay Halt</h5>
                <p>CTO, Co-founder</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={sj}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Sj</h5>
                <p>CVO</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={lem}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Lem</h5>
                <p>SMO manager</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={forse}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Forseti</h5>
                <p>Lawyer</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={calyp}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Calypso</h5>
                <p>Business Developer</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={face}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Facepiar</h5>
                <p>3D Artist</p>
              </div>
            </div>
            <div className='team-box'>
              <div className='team-box__pic'>
                <img src={teamBg} alt='' className='team-box__pic__bg' />
                <img
                  src={mk}
                  alt=''
                  className='team-box__pic__item'
                  style={{ marginLeft: '-3px' }}
                />
              </div>
              <div className='team-box__text'>
                <h5>Mk</h5>
                <p>Project manager</p>
              </div>
            </div>
          </div>
          <img src={logoBottom} alt='' className='team-logo-bottom' />
        </div>
      </div>
    </div>
  );
};

export default Team;
