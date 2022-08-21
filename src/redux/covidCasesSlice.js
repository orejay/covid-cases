import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data:{},
    error: ''
}

export const fetchCovidCases = createAsyncThunk('data/fetchCovidCases', ()=>{
    return axios
    .get('https://covidnigeria.herokuapp.com/api')
    .then((response)=> response.data)
})

const covidCasesSlice = createSlice({
    name : 'data',
    initialState,
    extraReducers:{
        [fetchCovidCases.pending]: (state)=>{
            state.loading = true
        },
        [fetchCovidCases.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [fetchCovidCases.rejected]: (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        },
    },    
})

export default covidCasesSlice.reducer