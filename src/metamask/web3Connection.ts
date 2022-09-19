import detectEthereumProvider from "@metamask/detect-provider";
import { web3 } from "../helper/web3";

// const accounts = await web3.eth.getAccounts()
// const balance = await web3.eth.getBalance(accounts[0])

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();
  const { ethereum } = window;

  if (provider === ethereum) {
    await web3.setProvider(provider || web3.givenProvider);
    const currentProvider: any = await web3.eth.currentProvider;
    console.log("providers", provider, ">>>", currentProvider);

    if (currentProvider) {

      let accounts = await currentProvider.request({
        //to fetch account
        method: "eth_requestAccounts",
      });

      await currentProvider.on("accountsChanged", async (newAccounts: any) => {
        console.log("accountsChanged", newAccounts);
      });

      await currentProvider.on("chainChanged", async (newChainID: any) => {
        console.log("chainChanged", newChainID, parseInt(newChainID));
        // accountInfo.chainId = parseInt(newChainID);
      });
      return accounts[0];
    }
  }
};

export const returnNetworkId = async ()  => {

    const currentProvider: any = await web3.eth.currentProvider;
    const chainId = parseInt(await currentProvider.chainId);
    console.log("chainId" ,chainId, await currentProvider.chainId )
    return chainId

}

export const switchNetwork = async () => {
  const currentProvider: any = await web3.eth.currentProvider;

  const chainId = parseInt("56", 10);
  await currentProvider.request({
    method: "wallet_switchEthereumChain",
    // 'wallet_addEthereumChain',
    params: [
      {
        chainId: `0x${chainId.toString(16)}`,
        // chainName: 'Binance Smart Chain Mainnet',
      },
    ],
  });
};

export const disconnectWallet = async () => {
  const currentProvider: any = await web3.eth.currentProvider;

  if (currentProvider) {
    await currentProvider._handleDisconnect(); //available disconnect event
  }

  await web3.setProvider(""); //disconnected wallets because of no provider
};
