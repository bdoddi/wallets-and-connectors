import logo from './logo.svg';
import './App.css';
import Metamask from './metamask/Metamask';
import WalletConnect from './walletConnect/WalletConnect';
import Canvas from './node-canvas/Canvas';
import { PrimarySpan } from './shared/styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i> Note:  The following are the list of Frameworks & Respected libraries involved in this template </i>
        <b>
          <p>
            <PrimarySpan>React-typeScript-web3-setup</PrimarySpan> ( Libraries:  Web3.js, Web3-react and web3Modal)
          </p>
          <p>
          <PrimarySpan>Redux setup</PrimarySpan> ( Libraries: Redux-toolkit && React-Redux)
          </p>
          <p>
          <PrimarySpan>Animation setup</PrimarySpan> ( Libraries: react-spring && react-canvas-draw)
          </p>
        </b>
        <Metamask />
        <WalletConnect />

        
        <Canvas />

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
