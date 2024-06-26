import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import Slices from "./slices"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const rootReducer = combineReducers({
    auth: Slices.auth,
    reviews: Slices.reviews,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch