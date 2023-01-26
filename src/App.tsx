import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import BeeProPage from './components/BeeProPage/BeeProPage';
import BeeproPage from './components/Pages/BeeproPage/BeeproPage';
import MarketIssues from './components/Pages/MarketIssues/MarketIssues';
import OurBrand from './components/Pages/OurBrand/OurBrand';
import Token from './components/Pages/Token/Token';
import Tokenomics from './components/Pages/Tokenomics/Tokenomics';
import NFT from './components/Pages/NFT/NFT';
import MiniGame from './components/Pages/MiniGame/MiniGame';
import Exchange from './components/UI/Exchange/Exchange';
import PersonalAcc from './components/UI/PersonalAcc/PersonalAcc';
import Beendexter from './components/UI/Beendexter/Beendexter';
import Wallet from './components/Pages/Wallet/Wallet';
import Bot from './components/Pages/Bot/Bot';
import Roadmap from './components/Pages/Roadmap/Roadmap';
import Team from './components/Pages/Team/Team';
import Links from './components/Pages/Links/Links';

function App() {
  //open state for sidebar
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Layout
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                headerHeight={headerHeight}
                setHeaderHeight={setHeaderHeight}
                sidebarWidth={sidebarWidth}
                setSidebarWidth={setSidebarWidth}
              />
            </>
          }
        >
          <Route
            path='/'
            element={
              <BeeproPage
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/marketIssues'
            element={
              <MarketIssues
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/brand'
            element={
              <OurBrand
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/token'
            element={
              <Token
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/tokenomics'
            element={
              <Tokenomics
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/nft'
            element={
              <NFT
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/miniGame'
            element={
              <MiniGame
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/exhange'
            element={
              <Exchange
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/personalAcc'
            element={
              <PersonalAcc
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/beendexter'
            element={
              <Beendexter
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/wallet'
            element={
              <Wallet
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/bot'
            element={
              <Bot
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/roadmap'
            element={
              <Roadmap
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/team'
            element={
              <Team
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
          <Route
            path='/links'
            element={
              <Links
                sidebarOpen={sidebarOpen}
                sidebarWidth={sidebarWidth}
                headerHeight={headerHeight}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
