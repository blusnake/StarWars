import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState, 
    reducers: {
        setCharactersData: (state, action) => {
            state.data = action.payload 
        },
        setError: (state) => {
            state.error = true
        }
    }
})

export const {setCharactersData, setError} = charactersSlice.actions

export default charactersSlice.reducer