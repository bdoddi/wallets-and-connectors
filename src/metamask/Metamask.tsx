import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { NetworkName } from '../helper/networks'
import { SubHeading, PrimaryButton } from '../shared/styled'
import { walletType } from '../helper/typesOfWallets'
import { connectWallet, disconnectWallet, returnNetworkId, switchNetwork } from './web3Connection'
import { injected } from '../helper/wallet'

const Metamask = () => {
    const [address, setAddress] = useState('')
    const [networkId, setNetworkId] = useState(0)
    // const [clickedWeb]

    const { account, activate, deactivate, chainId, active, library, connector } = useWeb3React()

    const connectToWeb3 = async (type: string) => {
        if (!address) {
            const account = await connectWallet()
            const network_Id = await returnNetworkId()
            setAddress(account)
            setNetworkId(network_Id)

        } else {
            await disconnectWallet()
            setAddress('')
        }
    }

    const connectToWeb3React = async () => {
        if (!active) {
            await activate(injected)
        } else {
            await deactivate()
        }
    }

    console.log("useWeb3React meta",">>", connector,"<<", account, activate, deactivate, chainId, active, library)

    return (
        <>
            <SubHeading>Metamask </SubHeading>
            {/* Web3 Connection  */}
            <PrimaryButton onClick={() => connectToWeb3(walletType[0])}>
                {address ? "Diconnect" : "Connect"} Web3 Wallet
            </PrimaryButton>
            {address && <i>Address : {address}</i>}
            {address && <i>Network Name : {NetworkName(networkId)}</i>}
            {address && <i>Chain ID: {networkId}</i>}
            {
                address && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            }

            {/* web3-react Connection */}
            <PrimaryButton onClick={connectToWeb3React}>
                {active ? "Diconnect" : "Connect"} Web3-React Wallet
            </PrimaryButton>
            {active && <i>Address : {account}</i>}
            {active && chainId && <i>Network Name : {NetworkName(chainId)}</i>}
            {active && <i>Chain ID: {chainId} </i>}
            {/* {
                active && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}

        </>
    )
}

export default Metamask