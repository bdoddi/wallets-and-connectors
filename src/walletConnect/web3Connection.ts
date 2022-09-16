import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { accountInfoInterface } from "../helper/interfaces";

//  Create WalletConnect Provider
const provider: any = new WalletConnectProvider({
//   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
//   chainId: 56,
  qrcodeModalOptions: {
    desktopLinks: [
      "metamask",
      "ledger",
      "tokenary",
      "wallet",
      "wallet 3",
      "secuX",
      "ambire",
      "wallet3",
      "apolloX",
      "zerion",
      "sequence",
      "punkWallet",
      "kryptoGO",
      "nft",
      "riceWallet",
      "vision",
      "keyring",
    ],
    mobileLinks: [
      "rainbow",
      "metamask",
      "argent",
      "trust",
      "imtoken",
      "pillar",
    ],
  },
  rpc: {
    // 1: "https://mainnet.mycustomnode.com",
    // 3: "https://ropsten.mycustomnode.com",
    // 100: "https://dai.poa.network",
    // ...
    56: 'https://bsc-dataseed.binance.org/'
  }
});

//  Create Web3 instance
const web3: any = new Web3(provider);

export const connect = async () => {
  try {
    console.log("entered", provider);
    const accountInfo: accountInfoInterface = {
      account: "",
      chainId: 0,
    };
    //  Create WalletConnect Provider
    // const provider = new WalletConnectProvider({
    //     rpc: {
    //       1: "https://mainnet.mycustomnode.com",
    //       3: "https://ropsten.mycustomnode.com",
    //       100: "https://dai.poa.network",
    //       // ...
    //     },
    //   });

    console.log("after provider", web3, web3.currentProvider);
    //  Enable session (triggers QR Code modal)
    await web3.currentProvider.enable();

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
    });

    //  Get Accounts
    const accounts = await web3.eth.getAccounts();
    accountInfo.account = accounts[0];
    //  Get Chain Id
    const chainId = await web3.eth.getChainId();
    accountInfo.chainId = chainId;
    //  Get Network Id
    const networkId = await web3.eth.net.getId();

    // Send Transaction
    //   const txHash = await web3.eth.sendTransaction(tx);

    //   // Sign Transaction
    //   const signedTx = await web3.eth.signTransaction(tx);

    //   // Sign Message
    //   const signedMessage = await web3.eth.sign(msg);

    //   // Sign Typed Data
    //   const signedTypedData = await web3.eth.signTypedData(msg);

    console.log("account details", accounts, chainId, networkId);
    return accountInfo;
  } catch (error) {
    console.log("error from wallet connect ===>", error);
    window.location.reload();
  }
};

export const disconnect = async () => {
  // Subscribe to session disconnection
  provider.on("disconnect", (code: number, reason: string) => {
    console.log(code, reason);
  });

  await provider.disconnect() //disconnects from trust wallet app as well
};
