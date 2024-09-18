import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import PizzasSlice from './slices/PizzasSlice'
import cartSlice from './slices/cartSlice'
import { useDispatch } from 'react-redux'




export const store = configureStore({
    reducer: {
        filter: filterSlice,
        pizza: PizzasSlice,
        cart: cartSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
