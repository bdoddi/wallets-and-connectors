import { createSlice } from "@reduxjs/toolkit";

export interface WalletProps  {
    newAccount?: string
}

const initialState: WalletProps = {
    newAccount: 'null'
}

const web3WalletSlice = createSlice({
    name: 'web3Wallet',
    initialState,
    reducers: {
      setAccount: (state : WalletProps, { payload }: { payload: string } ) => {
        state.newAccount = payload
      },
    },
  })

  export const { setAccount } = web3WalletSlice.actions

  export default web3WalletSlice.reducer