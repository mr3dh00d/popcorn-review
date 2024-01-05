import { configureStore } from "@reduxjs/toolkit";
import Slices from "./slices";

export const store = configureStore({
    reducer: {
        auth: Slices.auth,
        // reviews: reviewsReducer,
        // my_reviews: myReviewsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;