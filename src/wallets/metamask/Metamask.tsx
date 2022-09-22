import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { NetworkName } from '../../helper/networks'
import { SubHeading, PrimaryButton, GridComponent } from '../../shared/styled'
import { walletType } from '../../helper/typesOfWallets'
import { connectWallet, disconnectWallet, returnNetworkId } from './web3Connection'
import { injected } from '../../helper/wallet'
import { tokenBalanceFunction } from '../../helper/helper'
import { web3 } from '../../helper/web3'
import { web3ModalConnect, web3ModalDisconnect } from './web3ModalConnection'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'

const Metamask = () => {
    const [address, setAddress] = useState<string>('')
    const [networkId, setNetworkId] = useState<number>(0)
    const [balance, setBalance] = useState<string>('0.00')
    const [modalAddress, setModalAddress] = useState<string>('')
    const [modalChainId, setModalChainId] = useState<number>(0)
    const [modalProvider, setModalProvider] = useState<any>('')

    const dispatch = useAppDispatch()
    const { newAccount } = useAppSelector((state: any) => state.web3Wallet)

    const { account, activate, deactivate, chainId, active, library, connector } = useWeb3React()
    console.log("newAccount", newAccount)
    const connectToWeb3 = async (type: string) => {
        if (!address) {
            const account = await connectWallet(dispatch)
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

    const connectToWeb3Modal = async () => {
        if (!modalAddress) {
            const accountDetails = await web3ModalConnect()
            if (accountDetails) {
                setModalAddress(accountDetails[0])
                setModalChainId(accountDetails[1])
                setModalProvider(accountDetails[3])
                await fetchBalance(accountDetails[0], accountDetails[2])
            }
            console.log("web3ModalConnect", accountDetails)
        } else {
            await web3ModalDisconnect(modalProvider)
            setModalAddress('')
            setModalChainId(0)
            setModalProvider('')
        }
    }

    return (<>
        <SubHeading>Metamask </SubHeading>
        <GridComponent>
            <div>
                {/* Web3 Connection  */}
                <PrimaryButton onClick={() => connectToWeb3(walletType[0])}>
                    {address ? "Diconnect" : "Connect"} Web3 Wallet
                </PrimaryButton>
                {address && <>
                    <i>Address : {address}</i> <br />
                    {networkId && <i>Network Name : {NetworkName(networkId)}</i>} <br />
                    <i>Chain ID: {networkId} </i> <br />
                    <i>Balance: {balance}</i> <br />
                </>}
                {/* {
                    address && <PrimaryButton onClick={() => switchNetwork()}>
                        Switch to BSC Mainnet
                    </PrimaryButton>
                } */}
            </div>
            <div>
                {/* web3-react Connection */}
                <PrimaryButton onClick={connectToWeb3React}>
                    {active && connector === injected ? "Diconnect" : "Connect"} Web3-React Wallet
                </PrimaryButton>
                {connector === injected && active && <>
                    <i>Address : {account}</i> <br />
                    {chainId && <i>Network Name : {NetworkName(chainId)}</i>} <br />
                    <i>Chain ID: {chainId} </i> <br />
                    <i>Balance: {balance}</i> <br />
                </>}

                {/* {
                active && <PrimaryButton onClick={() => switchNetwork()}>
                    Switch to BSC Mainnet
                </PrimaryButton>
            } */}
            </div>

            <div>
                {/* web3-Modal Connection */}
                <PrimaryButton onClick={connectToWeb3Modal}>
                    {modalAddress ? "Diconnect" : "Connect"} Web3-Modal Wallet
                </PrimaryButton>
                {modalAddress && <>
                    <i>Address : {modalAddress}</i> <br />
                    {modalChainId && <i>Network Name : {NetworkName(modalChainId)}</i>} <br />
                    <i>Chain ID: {modalChainId} </i> <br />
                    <i>Balance: {balance}</i> <br />
                </>}
            </div>

        </GridComponent>
    </>
    )
}

export default Metamask