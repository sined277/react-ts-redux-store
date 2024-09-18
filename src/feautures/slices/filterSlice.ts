import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type sortPropertyItem = {
    name: string;
    sortProperty: "rating" | "title" | "price";
}

interface filterSliceState {
    categoryIndex: number;
    searchValue: string;
    currentPage: number;
    sortProperty: sortPropertyItem
}



const initialState: filterSliceState = {
    categoryIndex: 0,
    sortProperty: { name: 'цене', sortProperty: 'price' },
    searchValue: '',
    currentPage: 1,
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryIndex: (state, action: PayloadAction<number>) => {
            state.categoryIndex = action.payload
        },
        setSortProperty: (state, action: PayloadAction<sortPropertyItem>) => {
            return { ...state, sortProperty: action.payload }
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})

export const { setCategoryIndex, setSortProperty, setSearchValue, setCurrentPage } = filterSlice.actions

export const selectSortPropertyType = (state: RootState) => state.filter.sortProperty
export const selectCategoryIndex = (state: RootState) => state.filter.categoryIndex
export const selectSearchValue = (state: RootState) => state.filter.searchValue
export const selectCurrentPage = (state: RootState) => state.filter.currentPage

export default filterSlice.reducer