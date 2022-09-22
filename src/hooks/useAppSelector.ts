import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../shared/interfaces/walletInterfaces'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
