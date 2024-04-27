import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState, 
    reducers: {
        setMoviesData: (state, action) => {
            state.data = action.payload 
        },
        setError: (state) => {
            state.error = true
        }
    }
})

export const {setMoviesData, setError} = moviesSlice.actions

export default moviesSlice.reducer