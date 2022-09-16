import React from 'react';
import logo from './logo.svg';
import './App.css';
import Metamask from './metamask/Metamask';
import WalletConnect from './walletConnect/WalletConnect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React-typeScript-web3-tutorial
        </p>
        <Metamask />
        <WalletConnect />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
