import { ACCOUNT_ADDRESS } from "./constants"

export const getAddress = async(address: string) => {
    return {
        type: ACCOUNT_ADDRESS,
        address: address
    }
}