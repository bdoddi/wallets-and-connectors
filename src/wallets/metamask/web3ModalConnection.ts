import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";

const providerOptions = {
  // Example with injected providers
  injected: {
    display: {
    //   logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Injected",
      description: "Connect with the provider in your Browser",
    },
    package: null,
  },
  // Example with WalletConnect provider
  walletconnect: {
    display: {
    //   logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Mobile",
      description: "Scan qrcode with your mobile wallet",
    },
    package: WalletConnect,
    options: {
      infuraId: "INFURA_ID", // required
    },
  },
};

const web3Modal = new Web3Modal({
  //   network: "mainnet", // optional
  //   cacheProvider: true, // optional
  providerOptions, // required
});

export const web3ModalConnect = async () => {
  try {
    const provider = await web3Modal.connect();

    const web3: any = new Web3(provider);

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
    });

    // Subscribe to provider connection
    provider.on("connect", (info: { chainId: number }) => {
      console.log(info);
    });

    const accounts = await web3.eth.getAccounts();
    //   const accounts = await library.listAccounts();
    //   const network = await library.getNetwork();
    const chainId = await web3.eth.getChainId();
    console.log("accounts", web3.eth, accounts);
    return [accounts[0], chainId, web3, provider];
  } catch (error) {
    console.log("error from wallet connect ===>", error);
    window.location.reload();
  }
};

export const web3ModalDisconnect = async (provider: any) => {
    console.log("provider", provider,provider.on)
    // Subscribe to provider disconnection
    // provider.on("disconnect", (error: { code: number; message: string }) => {
    //   console.log(error);
    // });

    await provider._handleDisconnect();
    // const web3: any = new Web3(provider);
};
