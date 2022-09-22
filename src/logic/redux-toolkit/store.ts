import { configureStore } from "@reduxjs/toolkit";
import web3WalletReducer from './slices/web3WalletSlice'

const store = configureStore({
    reducer :{
        web3Wallet : web3WalletReducer
    }
})

export default store