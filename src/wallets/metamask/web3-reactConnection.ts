import { useWeb3React } from "@web3-react/core";



//**Note : Web3-react code is integrated in main Component itself */



// const switchNetwork = async () => {
//   try {
//     await library.provider.request({
//       method: "wallet_switchEthereumChain",
//       params: [{ chainId: toHex(network) }]
//     });
//   } catch (switchError) {
//     if (switchError.code === 4902) {
//       try {
//         await library.provider.request({
//           method: "wallet_addEthereumChain",
//           params: [networkParams[toHex(network)]]
//         });
//       } catch (error) {
//         setError(error);
//       }
//     }
//   }
// };

// const signMessage = async () => {
//   if (!library) return;
//   try {
//     const signature = await library.provider.request({
//       method: "personal_sign",
//       params: [message, account]
//     });
//     setSignedMessage(message);
//     setSignature(signature);
//   } catch (error) {
//     setError(error);
//   }
// };

// const verifyMessage = async () => {
//   if (!library) return;
//   try {
//     const verify = await library.provider.request({
//       method: "personal_ecRecover",
//       params: [signedMessage, signature]
//     });
//     setVerified(verify === account.toLowerCase());
//   } catch (error) {
//     setError(error);
//   }
// };