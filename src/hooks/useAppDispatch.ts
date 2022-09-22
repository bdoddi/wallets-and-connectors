import { useDispatch } from 'react-redux'
import { AppDispatch } from '../shared/interfaces/walletInterfaces'

export const useAppDispatch = () => useDispatch<AppDispatch>()
