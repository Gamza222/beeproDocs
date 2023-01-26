import React, { FC } from 'react';
import './Exchange.scss';
import { PageProps } from '../../assets/types';

const Exchange: FC<PageProps> = ({
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
          Exchange
        </h1>
        <p className='page-container__text'>
          We have also included the option to trade using a limit order, which
          is more user-friendly. You get the option of leaving a request to
          purchase a token at a certain price. In this case, the transaction is
          cancelled automatically as soon as the token's value falls below the
          price cap you have set.
        </p>
        <p className='page-container__text'>
          Your individual account will have a record of every transaction,
          including its full history. (Further discussion of this topic may be
          found in the next section.)
        </p>
      </div>
    </div>
  );
};

export default Exchange;
