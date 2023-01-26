import React, { FC } from "react";
import { PageProps } from "../../assets/types";
import beeproBottom from "../../assets/images/pages/beepro-bottom.png";
import logoBottom from "../../assets/images/pages/token-logo.png";
import "./Token.scss";

const Token: FC<PageProps> = ({ headerHeight, sidebarWidth, sidebarOpen }) => {
  return (
    <div
      className="page-container"
      style={{
        left: sidebarOpen ? `${sidebarWidth}px` : "0",
        top: `${headerHeight}px`,
      }}
    >
      <div className="page-container__content" style={{ height: "125vh" }}>
        <h1 className="page-container__title" style={{ marginBottom: "20px" }}>
          Token
        </h1>
        <p className="page-container__text">
          Supply and demand are the primary elements that play a role in
          determining the price of any product or service. It is also
          well-proven that supply and demand are tightly coupled. It means that
          changes in demand will inevitably result in a corresponding change in
          supply and vice versa. Each person who takes part in the market
          process has to maintain balance by taking into account the interests
          of other participants.
        </p>
        <p className="page-container__text">
          The economics study helps the parties better understand how their
          interests are mutually beneficial and prevents the market from going
          into deficit or surplus
        </p>
        <p className="page-container__text">
          Tokenomics is a word used when discussing crypto assets, however, the
          underlying economic principles are the same as those found in
          traditional market interactions. Tokenomics is the token's underlying
          business model. It should provide an overview of the project, define
          the token's use, and establish how it will be distributed and sold.
        </p>
        <p className="page-container__text">
          The goal of tokenomics is to get potential cryptocurrency holders
          interested in the goals of the development team for the production and
          distribution of tokens,
        </p>
        <p className="page-container__text">
          strategies to fight expected inflation, and options for real-world
          use. The focus is on ensuring that the development team can maintain
          supply and demand at a sustainable level.
        </p>
        <img src={logoBottom} alt="" className="token-logo-bottom" />
      </div>
    </div>
  );
};

export default Token;
