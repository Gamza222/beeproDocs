import React, { FC } from "react";
import { PageProps } from "../../assets/types";
import Logo from "../../assets/images/header/logo.svg";
import pic from "../../assets/images/pages/market-pic.png";
import "./MarketIssues.scss";

const MarketIssues: FC<PageProps> = ({
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
      <div className="page-container__top-pic"></div>
      <div className="page-container__content">
        <h1 className="page-container__title">Market issues</h1>

        <p className="page-container__text">
          The DEX exchange is based on blockchain technology, a decentralized
          network with no centralized government. Smart contracts are used to
          carry out transactions and other operations. The second advantage of
          decentralized exchanges is anonymity. The linking of non-custodial
          wallets or blockchain addresses is the method that is used to identify
          customers the vast majority of the time.
        </p>
        <p className="page-container__text">
          Decentralized exchanges have emerged as an essential component of the
          decentralized financial industry. In the middle of the year 2022, more
          than 200 decentralized exchanges were operating on dozens of different
          blockchain networks. Examples of well-known exchanges that fall under
          this category are SushiSwap, Compound, Curve, and Balancer.
        </p>
        <p className="page-container__text">
          {`
Therefore, one of the stages has been completed. You have selected an exchange. Now it is time to discuss the challenges you could face at the following stages and the solutions we can provide. (There is a high likelihood that this is the same "deal you can't reject.")`}
        </p>
        <p className="page-container__text">
          Almost everyone may have heard the adage, "Whoever owns the
          information, owns the world." It is said to have been spoken by many
          well-known figures, notably Churchill, Bacon, and Rothschild, making
          it difficult, if not impossible, to identify the real author. However,
          there is something more to consider in this context. The proverb will
          seem authentic coming from anybody's mouth. How come? Admittedly,
          their respective fields of employment, politics, philosophy, and
          finance nearly never intersect with each other. The response is that
          knowledge is crucial in all aspects of life in which one strives to be
          successful. Consequently, the realms of trade and investment are not
          exempt from this rule.
        </p>
        <p className="page-container__text">
          There is no exaggeration in claiming that the volume of current
          information in circulation is enormous. Nevertheless, there are also
          more ways to control this information glut.
        </p>
        <p className="page-container__text">
          Every development and implementation of obtaining and using the
          information in a simplified way is in high demand.
        </p>
        <p className="page-container__text">
          For instance, at the end of the 20th century, a group of enthusiastic
          developers demonstrated to everyone smart thinking namely Google,
          which eliminated the need for everyone to painstakingly meander around
          libraries and flip through page after page in search of the required
          information. It was a "virtual search".
        </p>
        <img src={pic} alt="logo-bg-pic" className="marketissues-bgpic" />
      </div>
    </div>
  );
};

export default MarketIssues;
