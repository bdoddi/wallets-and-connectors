import { ACCOUNT_ADDRESS } from "../actions/constants"

const initialState = {
    address: ''
}

export const rootReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ACCOUNT_ADDRESS : 
            return {
                ...state,
                address: action.address
            }
    }
}