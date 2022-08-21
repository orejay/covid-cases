import { configureStore } from '@reduxjs/toolkit'
import covidCasesReducer from './covidCasesSlice'

const store = configureStore({
  reducer: {
    data: covidCasesReducer,
  },
})

export default store