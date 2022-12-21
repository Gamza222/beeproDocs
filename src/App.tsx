import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import BeeProPage from "./components/BeeProPage/BeeProPage";

function App() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  return (
    <div className="App">
      <Layout
        headerHeight={headerHeight}
        setHeaderHeight={setHeaderHeight}
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
      >
        <Routes>
          <Route path="/" element={<BeeProPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
