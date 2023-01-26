import React, { FC } from "react";
import { PageProps } from "../../assets/types";
import "./OurBrand.scss";
import logoPic from "../../assets/images/pages/brand-logo.png";

const OurBrand: FC<PageProps> = ({
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
        <h1 className="page-container__title">Our brand - New technology</h1>
        <p className="page-container__text">
          The BEEPRO team suggests updating our approach to the information
          ecosystem. We recommend switching to the innovative Beendexer
          technology, which combines the above-mentioned processes via
          computational analysis to make working on the cryptocurrency exchange
          convenient and accessible to anyone instead of constantly monitoring
          the market, reading hundreds of long articles, and failing to keep up
          with every significant newsbreak.
        </p>
        <p className="page-container__text">
          The Ebenezer technology includes:
        </p>
        <div className="our-brand-blocks1 blocks">
          <div className="block">
            <p>
              Evaluation of blockchain networks <br /> with smart contracts;
            </p>
          </div>
          <div className="block">
            <p>
              Compiling the ranking <br />
              of token reliability
            </p>
          </div>
          <div className="block">
            <p>
              An in-depth analysis of <br />
              prospective projectscts;
            </p>
          </div>
          <div className="block">
            <p>
              Verifying the availability of liquid <br />
              currency pairs and exploring new ones
            </p>
          </div>
          <div className="block">
            <p>
              Providing accurate and up-to-date <br />
              information about cryptocurrencies
            </p>
          </div>
        </div>
        <p className="page-container__text">
          The Beendexer technology provides an opportunity to discover the most
          promising crypto projects currently available in the marketplace. It
          is analogous to how a bee would only collect the most delicious honey
          from a field of flowers.
        </p>
        <p className="page-container__text">
          Trading on the BEEPRO market grants you access to a portfolio
          containing comprehensive analytics of projects and operations.
          Additionally, the exchange's multifunctional interface enables you to
          carry out transactions without delay.
        </p>
        <p className="page-container__text">
          We are eager to provide you with the specific knowledge that will
          enable you to be at the top of the crypto world, and we are ready to
          accomplish that goal right away.
        </p>
        <p className="page-container__text">
          The BEEPRO exchange will assist you in the following ways:
        </p>
        <div className="our-brand-blocks1 blocks">
          <div className="block">
            <p>Improving efficiency</p>
          </div>
          <div className="block">
            <p>Time and money-saving process</p>
          </div>
          <div className="block">
            <p>Secure and no-fuss token transactions</p>
          </div>
        </div>
        <p className="page-container__text">
          Since 2017, a cryptographic currency security business called <br />{" "}
          Hicken has conducted <br />
          audits on our trading platform.
        </p>
        <img src={logoPic} alt="" className="brand-logo-bottom" />
      </div>
    </div>
  );
};

export default OurBrand;
