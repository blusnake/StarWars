import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false
}

const planetsSlice = createSlice({
    name: 'planets',
    initialState, 
    reducers: {
        setPlanetsData: (state, action) => {
            state.data = action.payload 
        },
        setError: (state) => {
            state.error = true
        }
    }
})

export const {setPlanetsData, setError} = planetsSlice.actions

export default planetsSlice.reducer