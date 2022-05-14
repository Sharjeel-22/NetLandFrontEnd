import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Createnft from './components/Createnft';
import Walletconnect from './components/Walletconnect';
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
          <Routes>
            <Route path='/profile' element={<Profile/>} />
          </Routes>
          <Routes>
            <Route path='/create-nft' element={<Createnft/>} />
          </Routes>
          <Routes>
            <Route path='/wallet-connect' element={<Walletconnect/>} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
