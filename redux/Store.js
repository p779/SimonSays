import { configureStore } from '@reduxjs/toolkit'
import { bestResults } from './store/BestResults';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    reducer: {
        bestResults: bestResults.reducer,
    }
})

export default store