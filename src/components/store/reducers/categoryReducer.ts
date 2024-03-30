import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICategory {
    category: string
}

const initialState: ICategory = {
    category: 'Все'
}

export const categoryReducer = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        }
    }
})

export default categoryReducer.reducer