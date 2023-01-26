import React, { FC } from "react";
import "./BeeproPage.scss";
import Logo from "../../assets/images/header/logo.svg";
import beeproBottom from "../../assets/images/pages/beepro-bottom.png";
import { PageProps } from "../../assets/types";

const BeeproPage: FC<PageProps> = ({
  headerHeight,
  sidebarWidth,
  sidebarOpen,
}) => {
  return (
    <div
      className="page-container"
      style={{
        left: sidebarOpen ? `${sidebarWidth}px` : "0",
        top: `${headerHeight}px`,
      }}
    >
      <div className="page-container__top-pic">
        <a href="/" className="page-container__top-pic__logo">
          <img src={Logo} alt="" />
          <p>BEEPRO</p>
        </a>
      </div>
      <div className="page-container__content">
        <h1 className="page-container__title">BEEPRO</h1>
        <h3 className="page-container__subtitle">Introduction</h3>
        <p className="page-container__text">
          Cryptocurrencies have been around for a while, and it's common
          knowledge that they are valuable assets that can be utilized,
          acquired, and sold for profit. Nevertheless, their popularity keeps
          growing as new possibilities arise. It's hardly surprising that the
          number of individuals seeking financial success in the bitcoin market
          grows daily. Tens of millions of people use it now, and that number
          might reach billions in the not-too-distant future.
        </p>
        <p className="page-container__text">
          The danger of capital loss and other issues often prove to be a
          barrier even for seasoned traders, and investors must keep them in
          mind while dealing with crypto assets. We will discuss the
          characteristics of the cryptocurrency market, why many users often
          experience trading failure, the drawbacks of the current trading
          platforms, and how our BEEPRO exchange can protect your money and
          maximize returns.
        </p>
        <img
          src={beeproBottom}
          alt=""
          className="page-container__image-bottom"
        />
      </div>
    </div>
  );
};

export default BeeproPage;
