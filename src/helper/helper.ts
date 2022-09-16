export const tokenBalanceFunction = async (account: string, library: any) => {
  if (account && library) {
    const tokenBalanace = await library.eth.getBalance(account);
    return tokenBalanace;
  }
};
