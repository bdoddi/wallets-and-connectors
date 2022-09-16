import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { NetworkName } from '../helper/networks'
import { SubHeading, PrimaryButton } from '../shared/styled'
import { walletType } from '../helper/typesOfWallets'
import { connectWallet, disconnectWallet, returnNetworkId, switchNetwork } from './web3Connection'
import { injected } from '../helper/wallet'
import { tokenBalanceFunction } from '../helper/helper'
import { web3 } from '../helper/web3'

const Metamask = () => {
    const [address, setAddress] = useState('')
    const [networkId, setNetworkId] = useState(0)
    const [balance, setBalance] = useState('0.00')
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

    const fetchBalance = async (account: string, library: any) => {
        const bal = await tokenBalanceFunction(account, library)
        setBalance(bal)
    }
    useEffect(() => {
        if (address && web3) {
            fetchBalance(address, web3)
        }
        if (account && library) {
            fetchBalance(account, library)
        }
    }, [account, library, address])

    console.log("useWeb3React meta", ">>", connector, "<<", account, activate, deactivate, chainId, active, library)

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
            {address && <i>Balance: {balance}</i>}
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
            {active && <i>Balance: {balance}</i>}
            {/* {
                active && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}

        </>
    )
}

export default Metamask