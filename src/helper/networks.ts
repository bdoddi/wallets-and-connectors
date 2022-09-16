export const NetworkName = (chainId: number) => {
  switch (chainId) {
    case 0:
      return "Not Found";
    case 1:
      return "Etheruem Mainnet";
    case 4:
      return "Ethereum testnet | Rinkeby";
    case 56:
      return "BSC Mainnet";
    case 80001:
      return "Mumbai | Polygon Testnet";
  }
};
