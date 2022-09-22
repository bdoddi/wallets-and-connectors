import logo from './logo.svg';
import './App.css';
import Metamask from './wallets/metamask/Metamask';
import WalletConnect from './wallets/walletConnect/WalletConnect';
import Canvas from './node-canvas/Canvas';
import { ComponentWrap, PrimarySpan } from './shared/styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i> Note:  The following are the list of Frameworks & Respected libraries involved in this template </i>
        <b>
          <p>
            <PrimarySpan>React-TypeScript-Web3</PrimarySpan> ( Web3.js, Web3-react and web3Modal )
          </p>
          <p>
            <PrimarySpan>Redux</PrimarySpan> ( Redux-toolkit && React-Redux )
          </p>
          <p>
            <PrimarySpan>Animations </PrimarySpan> ( react-canvas-draw && react-spring(coming soon...) )
          </p>
        </b>
        <ComponentWrap>
          <Metamask />
          <WalletConnect />
        </ComponentWrap>

        <ComponentWrap>
          <Canvas />
        </ComponentWrap>


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
