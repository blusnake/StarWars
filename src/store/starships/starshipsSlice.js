import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false
}

const starshipsSlice = createSlice({
    name: 'starships',
    initialState, 
    reducers: {
        setStarshipsData: (state, action) => {
            state.data = action.payload 
        },
        setError: (state) => {
            state.error = true
        }
    }
})

export const {setStarshipsData, setError} = starshipsSlice.actions

export default starshipsSlice.reducer