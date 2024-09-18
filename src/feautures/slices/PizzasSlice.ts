import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { RootState } from "../store";

type PizzasDataItem = {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    category: number;
    rating: number;
    types: number[];
    sizes: number[];
}



enum IsLoadingStatus {
    LOADING = "loading",
    SUCCES = "succes",
    ERROR = "error",
}

interface pizzasSliceState {
    pizzasData: PizzasDataItem[];
    isLoading: IsLoadingStatus.LOADING | IsLoadingStatus.SUCCES | IsLoadingStatus.ERROR
}

const initialState: pizzasSliceState = {
    pizzasData: [],
    isLoading: IsLoadingStatus.LOADING,
}

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (url: string, thunkAPI) => {
        try {
            const response = await axios.get<PizzasDataItem[]>(url)
            const data = await response.data
            return data as PizzasDataItem[]
        } catch (error) {
            console.log(`Error: ${error}`);
            throw thunkAPI.rejectWithValue(error)
        }
    }
)

export const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setPizzaData: (state, action) => {
            state.pizzasData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.isLoading = IsLoadingStatus.LOADING
            })

            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzasData = action.payload
                state.isLoading = IsLoadingStatus.SUCCES
            })
            
            .addCase(fetchPizzas.rejected, (state) => {
                state.pizzasData = []
                state.isLoading = IsLoadingStatus.ERROR
            })
    }
})

export const { setPizzaData } = pizzasSlice.actions

export const selectIsLoading = (state: RootState) => state.pizza.isLoading
export const selectPizzaData = (state: RootState) => state.pizza.pizzasData

export default pizzasSlice.reducer