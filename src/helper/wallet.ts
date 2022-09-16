import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { TorusConnector } from "@web3-react/torus-connector";
import { AuthereumConnector } from "@web3-react/authereum-connector";
import { MagicConnector } from "@web3-react/magic-connector";

export const POLYGON_TESTNET_CHAIN_ID = 80001;
const POLYGON_MAINNET_CHAIN_ID = 137;
export const ETHEREUM_TESTNET_CHAIN_ID = 4;
const ETHEREUM_MAINNET_CHAIN_ID = 1;

const supportedChainIds = [1, 4, 80001, 137, 43114, 56, 250, 42161, 10, 42, 5];

const RPC_URLS = {
  ETHEREUM_RPC_NODE_URL:
    "https://rinkeby.infura.io/v3/12432232727c459d9a7a4b8c5582a38c",
  POLYGON_RPC_NODE_URL:
    "https://polygon-mumbai.g.alchemy.com/v2/tm4_sLWgDbcExuOQxPbP2T8zBEC9X4wr",
};

export const walletLink = new WalletLinkConnector({
  url: RPC_URLS.ETHEREUM_RPC_NODE_URL,
  appName: "Types_Of_Wallets_&_Connections",
  supportedChainIds: supportedChainIds,
});

export const walletConnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  supportedChainIds: [
    POLYGON_TESTNET_CHAIN_ID,
    POLYGON_MAINNET_CHAIN_ID,
    ETHEREUM_TESTNET_CHAIN_ID,
    ETHEREUM_MAINNET_CHAIN_ID,
  ],
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  qrcodeModalOptions: {
    mobileLinks: [
      "rainbow",
      "metamask",
      "argent",
      "trust",
      "imtoken",
      "pillar",
    ],
  },
});

export const injected = new InjectedConnector({
  supportedChainIds: supportedChainIds,
});

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.FORTMATIC_API_KEY as string,
  chainId: ETHEREUM_TESTNET_CHAIN_ID,
});

export const portis = new PortisConnector({
  dAppId: process.env.PORTIS_DAPP_ID as string,
  networks: [ETHEREUM_TESTNET_CHAIN_ID, POLYGON_TESTNET_CHAIN_ID],
});

export const torus = new TorusConnector({
  chainId: ETHEREUM_TESTNET_CHAIN_ID,
});

export const authereum = new AuthereumConnector({
  chainId: ETHEREUM_TESTNET_CHAIN_ID,
});

export const magic = (email: string, chainId: any) => {
  const magic = new MagicConnector({
    apiKey: process.env.MAGIC_LINK_API_KEY as string,
    chainId: chainId ?? ETHEREUM_TESTNET_CHAIN_ID,
    email: email ?? "kirankumar@rapidinnovation.dev",
  });
  return magic;
};
