import { useWeb3React } from '@web3-react/core'
import React, { useState } from 'react'
import { NetworkName } from '../helper/networks'
import { walletConnect } from '../helper/wallet'
import { PrimaryButton, SubHeading } from '../shared/styled'
import { connect, disconnect } from './web3Connection'

const WalletConnect = () => {
    const [address, setAddress] = useState('')
    const [networkId, setNetworkId] = useState(0)

    const { connector, account, activate, deactivate, chainId, active, library } = useWeb3React()


    const connectWalletConnect = async () => {
        if (!address) {
            const accountDetails = await connect()
            if (accountDetails) {
                setAddress(accountDetails.account)
                setNetworkId(accountDetails.chainId ? accountDetails.chainId : networkId)
            }
        } else {
            await disconnect()
            setAddress('')
        }
    }

    const connectToWeb3React = async () => {
        if (!active) {
            await activate(walletConnect)
        } else {
            await deactivate()
        }
    }

    console.log("useWeb3React trust", connector, account, activate, deactivate, chainId, active, library)

    return (
        <>
            <SubHeading>Wallet-Connect (Trust Wallet) </SubHeading>
            {/* Web3 Connection  */}
            <PrimaryButton onClick={() => connectWalletConnect()}>
                {address ? "Diconnect" : "Connect"} Web3 Wallet
            </PrimaryButton>
            {address && <i>Address : {address}</i>}
            {address && <i>Network Name : {NetworkName(networkId)}</i>}
            {address && <i>Chain ID: {networkId}</i>}
            {/* {
                address && <PrimaryButton onClick={() => connectWalletConnect()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}


            {/* web3-react Connection */}
            <PrimaryButton onClick={connectToWeb3React}>
                {active ? "Diconnect" : "Connect"} Web3-React Wallet
            </PrimaryButton>
            {active && <i>Address : {account}</i>}
            {active && chainId && <i>Network Name : {NetworkName(chainId)}</i>}
            {active && <i>Chain ID: {chainId}</i>}
            {/* {
                active && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}
        </>
    )
}

export default WalletConnect