import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'

export type CartItem = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    count: number,
    types: number[]
}




interface cartSliceState  {
    pizzasInCartData: CartItem[];
    totalPrice: number;
    totalCount: number;
}

const initialState: cartSliceState = {
    pizzasInCartData: [],
    totalPrice: 0,
    totalCount: 0,
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductInCart: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.pizzasInCartData.find((pizza) => {
                return pizza.id === action.payload.id
            })

            if (findItem) {
                findItem.count++
            } else {
                state.pizzasInCartData.push({ ...action.payload, count: 1 })
            }


            state.totalPrice = state.pizzasInCartData.reduce((sum, pizza) => {
                return sum + (pizza.price * pizza.count)
            }, 0)
            state.totalCount = state.pizzasInCartData.length
        },


        minusPizza: (state, action: PayloadAction<string>) => {
            const findItem = state.pizzasInCartData.find((pizza) => {
                return pizza.id === action.payload
            })
            if (findItem) {
                findItem.count--
            }



            state.totalPrice = state.pizzasInCartData.reduce((sum, pizza) => {
                return sum + (pizza.price * pizza.count)
            }, 0)
            state.totalCount = state.pizzasInCartData.length
        },


        removeProduct: (state, action: PayloadAction<string>) => {
            state.pizzasInCartData = state.pizzasInCartData.filter((pizza) => pizza.id !== action.payload)



            state.totalPrice = state.pizzasInCartData.reduce((sum, pizza) => {
                return sum + (pizza.price * pizza.count)
            }, 0)
            state.totalCount = state.pizzasInCartData.length
        },


        clearCart: (state) => {
            state.pizzasInCartData = []
            state.totalPrice = 0
            state.totalCount = 0
        },

    }
})

export const { addProductInCart, removeProduct, clearCart, minusPizza } = cartSlice.actions

export default cartSlice.reducer