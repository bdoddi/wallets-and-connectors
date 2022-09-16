import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import { tokenBalanceFunction } from '../helper/helper'
import { NetworkName } from '../helper/networks'
import { walletConnect } from '../helper/wallet'
import { web3 } from '../helper/web3'
import { PrimaryButton, SubHeading } from '../shared/styled'
import { connect, disconnect } from './web3Connection'

const WalletConnect = () => {
    const [address, setAddress] = useState('')
    const [networkId, setNetworkId] = useState(0)
    const [balance, setBalance] = useState('0.00')

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
            {address && <i>Balance: {balance}</i>}
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
            {active && <i>Balance: {balance}</i>}
            {/* {
                active && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}

        </>
    )
}

export default WalletConnect